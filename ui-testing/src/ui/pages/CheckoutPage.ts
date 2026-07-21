import { expect, Page } from "@playwright/test";

export class CheckoutPage{
    constructor(private readonly page: Page) {}  
    async goto() {
        await this.page.goto('/checkout');
        await expect(this.page.getByTestId('logo-link')).toBeVisible();
    }

    async continueToPayment() {
          await this.page.getByTestId('continue-to-payment-button').click();
    }
}