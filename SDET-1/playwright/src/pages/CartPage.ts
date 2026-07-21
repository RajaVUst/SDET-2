import { Page , Locator} from "@playwright/test";
import { expect } from "../fixtures/test.fixture";

export class CartPage {

    constructor(private readonly page: Page) {}

    private cartBanner(): Locator{
        return this.page.getByRole("heading", {name: "Shopping Cart"})
    }

    private productLink(productId:string):Locator{
        return this.page.getByTestId(productId);
    }

    private productPrice(productId:string):Locator{
        return this.page.getByTestId(productId);
    }

    private orderSummary():Locator{
        return this.page.getByRole("heading", {name: "Order Summary"});
    }

    private checkoutButton(): Locator{
        return this.page.getByRole("button", {name: "Proceed to Checkout"});
    }

    private removeButton(): Locator{
        return this.page.getByRole("button", {name: "Remove"});
    }

    private removeButtonByProductId(productId: string): Locator {
        return this.page.getByTestId(`cart-remove-${productId}`);
    }

    private cartEmpty(): Locator{
        return this.page.getByRole("heading", {name:"Your cart is empty"})
    }

    private continueShopping(): Locator{
        return this.page.getByTestId("continue-shopping-link");
    }

    private cartSubtotal(): Locator {
        return this.page.getByTestId("cart-subtotal");
    }

    private cartTax(): Locator {
        return this.page.getByTestId("cart-tax");
    }

    private cartTotal(): Locator {
        return this.page.getByTestId("cart-total");
    }

    private cartItemName(productId: string): Locator {
        return this.page.getByTestId(`cart-item-name-${productId}`);
    }

    async verifyCartPage(): Promise<void>{
        await expect(this.cartBanner()).toBeVisible();
        await expect(this.productLink("cart-item-name-prod-006")).toBeVisible();
        await expect(this.productPrice("cart-item-price-prod-006")).toBeVisible();
        await expect(this.orderSummary()).toBeVisible();
        await expect(this.checkoutButton()).toBeVisible();
    }

    async clickCheckoutButton(): Promise<void>{
        await this.checkoutButton().click();
    }

    async clickRemove(): Promise<void>{
        await this.removeButton().click();
    }

    async removeProductById(productId: string): Promise<void> {
        await this.removeButtonByProductId(productId).click();
        await this.page.waitForTimeout(500); 
    }

    async verifyEmptyCart(): Promise<void>{
        await expect(this.cartEmpty()).toBeVisible();
        await expect(this.continueShopping()).toBeVisible();
    }

    async verifyProductNotInCart(productId: string): Promise<void> {
        await expect(this.cartItemName(productId)).not.toBeVisible();
    }

    async verifyProductInCart(productId: string): Promise<void> {
        await expect(this.cartItemName(productId)).toBeVisible();
    }

    async getSubtotalValue(): Promise<string> {
        return await this.cartSubtotal().textContent() || "";
    }

    async getTaxValue(): Promise<string> {
        return await this.cartTax().textContent() || "";
    }

    async getTotalValue(): Promise<string> {
        return await this.cartTotal().textContent() || "";
    }

    async verifyCartCalculations(expectedSubtotal: string, expectedTax: string, expectedTotal: string): Promise<void> {
        await expect(this.cartSubtotal()).toContainText(expectedSubtotal);
        await expect(this.cartTax()).toContainText(expectedTax);
        await expect(this.cartTotal()).toContainText(expectedTotal);
    }

}