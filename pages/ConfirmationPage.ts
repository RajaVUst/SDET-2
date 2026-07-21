import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ConfirmationLocators } from "../locators/ConfirmationLocators";

export class ConfirmationPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async verifyConfirmationPage() {

        await expect(
            this.page.getByTestId(
                ConfirmationLocators.CONFIRMATION_PAGE
            )
        ).toBeVisible();

    }

    async verifyHeading() {

        await expect(
            this.page.getByTestId(
                ConfirmationLocators.CONFIRMATION_HEADING
            )
        ).toContainText("Order Confirmed!");

    }

    async getOrderNumber(): Promise<string> {

        return (
            await this.page
                .getByTestId(ConfirmationLocators.ORDER_NUMBER)
                .textContent()
        )?.trim() || "";

    }

    async verifyOrderTotal() {

        await expect(
            this.page.getByTestId(
                ConfirmationLocators.CONFIRMATION_TOTAL
            )
        ).not.toHaveText("");

    }

}