import { expect, Page } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ConfirmationPage } from "../pages/ConfirmationPage";

import { ProductData } from "../data/ProductData";
import { GuestData } from "../data/GuestData";
import { ShippingData } from "../data/ShippingData";
import { PaymentData } from "../data/PaymentData";

export class ShoppingFlow {

    private homePage: HomePage;
    private cartPage: CartPage;
    private checkoutPage: CheckoutPage;
    private paymentPage: PaymentPage;
    private confirmationPage: ConfirmationPage;

    constructor(private page: Page) {

        this.homePage = new HomePage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.paymentPage = new PaymentPage(page);
        this.confirmationPage = new ConfirmationPage(page);

    }

    async completePurchase() {

        // Launch Application
        await this.homePage.open("/");

        await this.homePage.verifyHomePage();

        // Laptop
        await this.homePage.searchProduct("Laptop");
        await this.homePage.verifyProduct(ProductData.LAPTOP.id);
        await this.homePage.addToCart(ProductData.LAPTOP.id);
        await this.homePage.verifyCartCount(1);

        // Coffee Maker
        await this.homePage.searchProduct("Coffee Maker");
        await this.homePage.verifyProduct(ProductData.COFFEE.id);
        await this.homePage.addToCart(ProductData.COFFEE.id);
        await this.homePage.verifyCartCount(2);

        // Book
        await this.homePage.searchProduct("Book");
        await this.homePage.verifyProduct(ProductData.BOOK.id);
        await this.homePage.addToCart(ProductData.BOOK.id);
        await this.homePage.verifyCartCount(3);

        // Cart
        await this.homePage.openCart();

        await this.cartPage.verifyCartPage();

        await this.cartPage.verifyProduct(ProductData.LAPTOP.id);
        await this.cartPage.verifyProduct(ProductData.COFFEE.id);
        await this.cartPage.verifyProduct(ProductData.BOOK.id);

        await this.cartPage.verifyProductName(
            ProductData.LAPTOP.id,
            ProductData.LAPTOP.name
        );

        await this.cartPage.verifyProductName(
            ProductData.COFFEE.id,
            ProductData.COFFEE.name
        );

        await this.cartPage.verifyProductName(
            ProductData.BOOK.id,
            ProductData.BOOK.name
        );

        await this.cartPage.verifyPrice(ProductData.LAPTOP.id);
        await this.cartPage.verifyPrice(ProductData.COFFEE.id);
        await this.cartPage.verifyPrice(ProductData.BOOK.id);

        await this.cartPage.verifyQuantity(ProductData.LAPTOP.id);
        await this.cartPage.verifyQuantity(ProductData.COFFEE.id);
        await this.cartPage.verifyQuantity(ProductData.BOOK.id);

        await this.cartPage.clickCheckout();

        // Checkout
        await this.checkoutPage.verifyCheckoutPage();

        await this.checkoutPage.enterGuest(
            GuestData.NAME,
            GuestData.EMAIL,
            GuestData.PHONE
        );

        await this.checkoutPage.enterShipping(
            ShippingData.STREET,
            ShippingData.CITY,
            ShippingData.STATE,
            ShippingData.ZIP,
            ShippingData.COUNTRY
        );

        await this.checkoutPage.continueToPayment();

        // Payment
        await this.paymentPage.verifyPaymentPage();

        await this.paymentPage.makePayment(
            PaymentData.CARD_NAME,
            PaymentData.CARD_NUMBER,
            PaymentData.EXPIRY,
            PaymentData.CVV
        );

        await this.paymentPage.placeOrder();

        // Confirmation
        await this.confirmationPage.verifyConfirmationPage();

        await this.confirmationPage.verifyHeading();

        await this.confirmationPage.verifyOrderTotal();

        const orderNumber =
            await this.confirmationPage.getOrderNumber();

        expect(orderNumber).toMatch(/^RM-\d{8}-\d+$/);

    }

}