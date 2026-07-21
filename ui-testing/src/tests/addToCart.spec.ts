import { test, expect } from "../fixtures/test";
import { alice } from "../fixtures/data/userData"
import { products } from "../fixtures/data/testData";

test.describe("Cart feature", () => {
    test("Scenario 1: add multiple product to cart", async ({ addToCartFlow, evidence, page }) => {
        await page.goto('/');
        await addToCartFlow.addProduct(products.prod1);
        await addToCartFlow.addProduct(products.prod2);
        await addToCartFlow.addProduct(products.prod3);
        await expect(page.getByTestId('cart-count')).toHaveText('3');
        evidence.products;
        await addToCartFlow.goToCart();
        
        await addToCartFlow.cartPage.validation();

        await addToCartFlow.cartPage.increaseProductQty();
        await addToCartFlow.cartPage.removeProduct();

        await addToCartFlow.cartPage.validation();

        await page.reload();
        await expect(page.getByTestId('cart-heading')).toHaveText(/(3 items)/i);
    });

    test("Scenario 2: Payment failure", async ({ addToCartFlow, page }) => {
        await addToCartFlow.loginSuccessFlow();
        await addToCartFlow.addMultipleProduct();
        await addToCartFlow.continueToCheckout();
        await addToCartFlow.continueToPayment();
        await addToCartFlow.placeOrder(alice.name, alice.card_number, alice.card_expiry, alice.card_cvv);
        await expect(page.getByTestId('payment-general-error')).toBeVisible();

        await page.getByTestId('user-menu-button').click();
        await page.getByTestId('nav-order-history').click();
        await expect(page.getByTestId('orders-count')).toContainText('2') //alice has 2 orders already
    });
});
