import {Page} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { AppLogger } from "../utils/logger";
import { TEST_DATA, PRODUCT_IDS, PAYMENT_SECRETS } from "../config/constants";

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
        await this.homePage.addToCart(PRODUCT_IDS.PRODUCT_006); 
    }

    async addMultipleProductsToCart(): Promise<void>{
        await this.homePage.navigateHomePage();
        await this.homePage.verifyHomePage();
        await this.homePage.addToCart(PRODUCT_IDS.PRODUCT_001);
        await this.homePage.addToCart(PRODUCT_IDS.PRODUCT_006);
        await this.homePage.addToCart(PRODUCT_IDS.PRODUCT_005); 
        await this.homePage.verifyCartUpdate();
    }

    async removeProductValidation(): Promise<void>{
        await this.homePage.clickCart();
        await this.cartPage.verifyCartPage();
        
        await this.cartPage.verifyProductInCart(PRODUCT_IDS.PRODUCT_001);
        await this.cartPage.verifyProductInCart(PRODUCT_IDS.PRODUCT_006);
        await this.cartPage.verifyProductInCart(PRODUCT_IDS.PRODUCT_005);
        
        await this.cartPage.removeProductById(PRODUCT_IDS.PRODUCT_001);
        await this.cartPage.verifyProductNotInCart(PRODUCT_IDS.PRODUCT_001);
        
        const subtotalAfterFirstRemoval = await this.cartPage.getSubtotalValue();
        console.log("Subtotal after removing first product: " + subtotalAfterFirstRemoval);
        
        await this.cartPage.removeProductById(PRODUCT_IDS.PRODUCT_006);
        await this.cartPage.verifyProductNotInCart(PRODUCT_IDS.PRODUCT_006);
        
        await this.cartPage.verifyProductInCart(PRODUCT_IDS.PRODUCT_005);
        
        const subtotalAfterSecondRemoval = await this.cartPage.getSubtotalValue();
        console.log("Subtotal after removing second product: " + subtotalAfterSecondRemoval);
        
        await this.cartPage.removeProductById(PRODUCT_IDS.PRODUCT_005);
        await this.cartPage.verifyProductNotInCart(PRODUCT_IDS.PRODUCT_005);
        
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
        await this.checkoutPage.fillContactInformation(TEST_DATA.VALID_USER.name, TEST_DATA.VALID_USER.email, TEST_DATA.VALID_USER.phone);
        await this.checkoutPage.fillShippingAddress(TEST_DATA.SHIPPING_ADDRESS.street, TEST_DATA.SHIPPING_ADDRESS.city, TEST_DATA.SHIPPING_ADDRESS.state, TEST_DATA.SHIPPING_ADDRESS.zipCode, TEST_DATA.SHIPPING_ADDRESS.country);
        await this.checkoutPage.clickPayment();
    }

    async fillPaymentDetails(): Promise<void>{
        await this.paymentPage.verifyCheckoutPage();
        await this.paymentPage.fillCardInformation(PAYMENT_SECRETS.cardholderName, PAYMENT_SECRETS.cardNumber, PAYMENT_SECRETS.expiryDate, PAYMENT_SECRETS.cvv);
        await this.paymentPage.clickPlaceOrder();
        await this.paymentPage.assertDecline();
    }


}