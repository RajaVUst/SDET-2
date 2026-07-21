import { expect, Page } from "@playwright/test";

export class HomePage{
    constructor(private readonly page: Page) {}  
    async goto() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded'});
        await expect(this.page.getByTestId('logo-link')).toBeVisible();
    }

    async addMultipleProduct() {
        await this.page.getByTestId('add-to-cart-prod-001').click();
        await this.page.getByTestId('add-to-cart-prod-002').click();
        await this.page.getByTestId('cart-link').click();
    }

     async search(query: string){
        await this.page.getByTestId('search-input').fill(query);
        await this.page.getByTestId('search-button').click();
    }

    async addProduct() {
        await this.page.getByTestId(/add-to-cart-prod-/i).first().click();
    }
}