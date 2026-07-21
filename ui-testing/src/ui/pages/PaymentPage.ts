import { expect, Page } from "@playwright/test";

export class PaymentPage{
    constructor(private readonly page: Page) {}  
    async goto() {
        await this.page.goto('/payment');
    }

    async payment(NAME: string, CARD_NUMBER: string, CARD_EXPIRY: string, CARD_CVV: string) {
        await this.page.getByTestId('payment-scenario-failure').check();
        await this.page.getByTestId('payment-card-name').fill(NAME);
        await this.page.getByTestId('payment-card-number').fill(CARD_NUMBER);
        await this.page.getByTestId('payment-expiry').fill(CARD_EXPIRY);
        await this.page.getByTestId('payment-cvv').fill(CARD_CVV);
        await this.page.getByTestId('place-order-button').click();
    }
}