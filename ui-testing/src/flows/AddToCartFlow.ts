import { expect, type Page } from "@playwright/test";
import { HomePage } from "../ui/pages/HomePage";
import { LoginPage } from "../ui/pages/LoginPage";
import { PaymentPage } from "../ui/pages/PaymentPage";
import { CartPage } from "../ui/pages/CartPage";
import { CheckoutPage } from "../ui/pages/CheckoutPage";

export class AddToCartFlow {
    readonly homePage: HomePage;
    readonly loginPage: LoginPage;
    readonly cartPage: CartPage;
    readonly paymentPage: PaymentPage;
    readonly checkoutPage: CheckoutPage;
    constructor(private readonly page: Page) {
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
    }

    loginSuccessFlow = async () => {
        await this.loginPage.goto();
        await this.loginPage.login();
    }

    addProduct = async (query: string) => {
        await this.homePage.search(query);
        await this.homePage.addProduct();
    }

    goToCart = async () => {
        await this.cartPage.goto();
    }

    addMultipleProduct = async () => {
        await this.homePage.addMultipleProduct();
    }

    continueToCheckout = async () => {
        await this.cartPage.continueToCheckout();
    }

    continueToPayment = async () => {
        await this.checkoutPage.continueToPayment();
    }

    placeOrder = async (NAME: string, CARD_NUMBER: string, CARD_EXPIRY: string, CARD_CVV: string) => {
        await this.paymentPage.payment(NAME, CARD_NUMBER, CARD_EXPIRY, CARD_CVV);
    }


}