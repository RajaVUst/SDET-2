import { test, expect } from "../fixtures/test";
import { alice } from "../fixtures/data/userData"

test.describe("Cart feature", () => {
    test("Scenario 1: add multiple product to cart", async ({ addToCartFlow, page }) => {
        await page.goto('/');
        await addToCartFlow.addProduct('headphone');
        await addToCartFlow.addProduct('laptop');
        await addToCartFlow.addProduct('monitor');
        await expect(page.getByTestId('cart-count')).toHaveText('3');
        await addToCartFlow.goToCart();

        await addToCartFlow.cartPage.validation();

        await addToCartFlow.cartPage.increaseProductQty();
        await addToCartFlow.cartPage.removeProduct();

        await addToCartFlow.cartPage.validation();

        await page.reload();
        await expect(page.getByTestId('cart-heading')).toHaveText(/(3 items)/i);
    });

    test("Scenario 2: Payment failure", async ({ addToCartFlow }) => {
        await addToCartFlow.loginSuccessFlow();
        await addToCartFlow.addMultipleProduct();
        await addToCartFlow.continueToCheckout();
        await addToCartFlow.continueToPayment();
        await addToCartFlow.placeOrder(alice.name, alice.card_number, alice.card_expiry, alice.card_cvv);
    });
});
