import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { PaymentLocators } from "../locators/PaymentLocators";

export class PaymentPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async verifyPaymentPage() {

        await expect(
            this.page.getByTestId(PaymentLocators.PAYMENT_PAGE)
        ).toBeVisible();

    }

    async makePayment(
        cardName: string,
        cardNumber: string,
        expiry: string,
        cvv: string
    ) {

        await this.fill(PaymentLocators.CARD_NAME, cardName);

        await this.fill(PaymentLocators.CARD_NUMBER, cardNumber);

        await this.fill(PaymentLocators.EXPIRY, expiry);

        await this.fill(PaymentLocators.CVV, cvv);

    }

    async placeOrder() {

        await this.click(PaymentLocators.PLACE_ORDER);

    }

}