import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CheckoutLocators } from "../locators/CheckoutLocators";

export class CheckoutPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async verifyCheckoutPage() {

        await expect(
            this.page.getByTestId(CheckoutLocators.CHECKOUT_PAGE)
        ).toBeVisible();

    }

    async enterGuest(name: string, email: string, phone: string) {

        await this.fill(CheckoutLocators.GUEST_NAME, name);

        await this.fill(CheckoutLocators.GUEST_EMAIL, email);

        await this.fill(CheckoutLocators.GUEST_PHONE, phone);

    }

    async enterShipping(
        street: string,
        city: string,
        state: string,
        zip: string,
        country: string
    ) {

        await this.fill(CheckoutLocators.STREET, street);

        await this.fill(CheckoutLocators.CITY, city);

        await this.select(CheckoutLocators.STATE, state);

        await this.fill(CheckoutLocators.ZIP, zip);

        await this.fill(CheckoutLocators.COUNTRY, country);

    }

    async continueToPayment() {

        await this.click(
            CheckoutLocators.CONTINUE_PAYMENT
        );

    }

}