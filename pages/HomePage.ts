import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HomeLocators } from "../locators/HomeLocators";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async verifyHomePage() {
        await expect(this.page.getByTestId(HomeLocators.HEADER))
            .toBeVisible();
    }

    async searchProduct(product: string) {

        await this.fill(HomeLocators.SEARCH_INPUT, product);

        await this.click(HomeLocators.SEARCH_BUTTON);
    }

    async verifyProduct(id: string) {

        await expect(
            this.page.getByTestId(HomeLocators.PRODUCT_CARD(id))
        ).toBeVisible();

    }

    async addToCart(id: string) {

        await this.click(HomeLocators.ADD_TO_CART(id));

    }

    async verifyCartCount(count: number) {

        await expect(
            this.page.getByTestId(HomeLocators.CART_COUNT)
        ).toHaveText(count.toString());

    }

    async openCart() {

        await this.click(HomeLocators.CART_LINK);

    }

}