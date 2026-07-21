import { expect, Page } from "@playwright/test";

export class CartPage {
    constructor(private readonly page: Page) { }
    async goto() {
        await this.page.goto('/cart', { waitUntil: 'domcontentloaded' });
        await expect(this.page.getByTestId('logo-link')).toBeVisible();
    }

    async continueToCheckout() {
        await expect(this.page.getByTestId('cart-heading').getByText('(2 items)')).toBeVisible();
        await this.page.getByTestId('cart-item-price-prod-001').click();
        await this.page.getByTestId('cart-item-price-prod-002').click();
        await this.page.getByTestId('cart-subtotal').click();
        await this.page.getByTestId('checkout-button').click();
    }

    async increaseProductQty() {
        await this.page.getByTestId('cart-qty-increase-prod-001').click()
    }

    async removeProduct() {
        await this.page.getByTestId('cart-remove-prod-002').click();
    }

    async validation() {
        const price = await this.page.getByTestId(/cart-item-price-prod-/i).allInnerTexts();
        const priceToPaise = price.map(p =>
            Number(p.replace('$', '').replace('.', ''))
        );

        const sum = priceToPaise.reduce((p,i) => p+i,0);
        
        const subtotal = await this.page.getByTestId('cart-subtotal').innerText();
        const subtotalNum = Number(subtotal.replace('$', '').replace('.', ''));

        const total = await this.page.getByTestId('cart-total').innerText();
        const totalNum = Number(total.replace('$', '').replace('.', ''));
        const tax = await this.page.getByTestId('cart-tax').innerText();
        const taxNum = Number(tax.replace('$', '').replace('.', ''));
        
        await expect(subtotalNum).toEqual(sum);
        await expect(totalNum).toEqual(sum + taxNum);
    }
}