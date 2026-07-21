import {Page} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { AppLogger } from "../utils/logger";

export class OrderFlow {
    private readonly homePage: HomePage;
    private readonly cartPage: CartPage;
    private readonly checkoutPage: CheckoutPage;
    private readonly paymentPage: PaymentPage;

    constructor(private readonly page: Page, private readonly log:AppLogger) {
        this.homePage = new HomePage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.paymentPage = new PaymentPage(page);
    }

    async addToCart() : Promise<void>{
        await this.homePage.navigateHomePage();
        await this.homePage.verifyHomePage();
        await this.homePage.addToCart("prod-006"); // Add using product ID
        await this.homePage.verifyCartUpdate();
    }

    async addMultipleProductsToCart(): Promise<void>{
        await this.homePage.navigateHomePage();
        await this.homePage.verifyHomePage();
        await this.homePage.addToCart('prod-001'); 
        await this.homePage.addToCart('prod-006'); 
        await this.homePage.addToCart('prod-005'); 
        await this.homePage.verifyCartUpdate();
    }

    async removeProductValidation(): Promise<void>{
        await this.homePage.clickCart();
        await this.cartPage.verifyCartPage();
        
        await this.cartPage.verifyProductInCart("prod-001");
        await this.cartPage.verifyProductInCart("prod-006");
        await this.cartPage.verifyProductInCart("prod-005");
        
        await this.cartPage.removeProductById("prod-001");
        await this.cartPage.verifyProductNotInCart("prod-001");
        
        const subtotalAfterFirstRemoval = await this.cartPage.getSubtotalValue();
        console.log("Subtotal after removing first product: " + subtotalAfterFirstRemoval);
        
        await this.cartPage.removeProductById("prod-006");
        await this.cartPage.verifyProductNotInCart("prod-006");
        
        await this.cartPage.verifyProductInCart("prod-005");
        
        const subtotalAfterSecondRemoval = await this.cartPage.getSubtotalValue();
        console.log("Subtotal after removing second product: " + subtotalAfterSecondRemoval);
        
        await this.cartPage.removeProductById("prod-005");
        await this.cartPage.verifyProductNotInCart("prod-005");
        
        await this.cartPage.verifyEmptyCart();
    }

    async continueCheckout(): Promise<void>{
        await this.homePage.clickCart();
        await this.cartPage.verifyCartPage();
        await this.cartPage.clickCheckoutButton();
    }

    async fillCheckoutDetails(): Promise<void>{
        await this.checkoutPage.verifyCheckoutPage();
        await this.checkoutPage.switchGuest();
        await this.checkoutPage.fillContactInformation("Chaithra Chandran", "chaithra@ust.com", "7890564567");
        await this.checkoutPage.fillShippingAddress("West coast", "Chennai", "IN", "60002", "India");
        await this.checkoutPage.clickPayment();
    }

    async fillPaymentDetails(name:string, cardNumber:string,expiry:string, cvv:string): Promise<void>{
        await this.paymentPage.verifyCheckoutPage();
        await this.paymentPage.fillCardInformation(name, cardNumber,expiry, cvv);
        await this.paymentPage.clickPlaceOrder();
        await this.paymentPage.assertDecline();
    }


}