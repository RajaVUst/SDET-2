import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartLocators } from "../locators/CartLocators";

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async verifyCartPage() {

        await expect(
            this.page.getByTestId(CartLocators.CART_PAGE)
        ).toBeVisible();

    }

    async verifyProduct(id: string) {

        await expect(
            this.page.getByTestId(CartLocators.CART_ITEM(id))
        ).toBeVisible();

    }

    async verifyProductName(id: string, name: string) {

        await expect(
            this.page.getByTestId(CartLocators.ITEM_NAME(id))
        ).toContainText(name);

    }

    async verifyPrice(id: string) {

        await expect(
            this.page.getByTestId(CartLocators.ITEM_PRICE(id))
        ).not.toHaveText("");

    }

    async verifyQuantity(id: string) {

        await expect(
            this.page.getByTestId(CartLocators.ITEM_QUANTITY(id))
        ).toHaveText("1");

    }

    async clickCheckout() {

        await this.click(CartLocators.CHECKOUT_BUTTON);

    }

}