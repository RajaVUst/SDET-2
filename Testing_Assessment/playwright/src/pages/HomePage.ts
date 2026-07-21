import { Page , Locator} from "@playwright/test";
import { expect } from "../fixtures/test.fixture";
import { APP_CONSTANTS } from "../config/constants";

export class HomePage {

    constructor(private readonly page: Page) {}

    private shopNowButton(): Locator {
        return this.page.getByRole("link", {name:"Shop Now"});
    }

    private shopBanner(): Locator{
        return this.page.getByRole("heading", {name: "Shop Everything at RetailMart"});
    }


    private addCart(productName: string): Locator {
        return this.page.locator(`//div[@data-testid*="product-card"]//a[contains(text(), "${productName}")]/ancestor::div[@data-testid*="product-card"]//button[contains(@data-testid, "add-to-cart")]`);
    }

    private addCartByProductId(productId: string): Locator {
        return this.page.getByTestId(`add-to-cart-${productId}`);
    }

    private cartButton(): Locator{
        return this.page.getByTestId("cart-link");
    }

    private cartCount(): Locator{
        return this.page.getByTestId("cart-count");
    }

    async navigateHomePage(): Promise<void>{
        await this.page.goto(APP_CONSTANTS.BASE_URL);
        await this.page.waitForLoadState();
    }

    async verifyHomePage(): Promise<void>{
        await expect(this.shopBanner()).toBeVisible();
        await expect(this.shopNowButton()).toBeVisible();
    }

    async addToCart(productIdentifier: string): Promise<void> {
        if (productIdentifier?.startsWith('prod-')) {
            await this.addCartByProductId(productIdentifier).click();
        }
        else if (productIdentifier) {
            await this.addCart(productIdentifier).click();
        }
        else {
            await this.addCartByProductId('prod-001').click();
        }
    }

    async verifyCartUpdate(): Promise<void>{
        await expect(this.cartButton()).toBeVisible();
        await expect(this.cartCount()).toBeVisible();
    }

    async clickCart(): Promise<void>{
        await this.cartButton().click();
    }
}



