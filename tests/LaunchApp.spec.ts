import { test, expect } from "@playwright/test";

test("Add product to cart", async ({ page }) => {

    // Launch Application
    await page.goto("/");

    // Verify Home Page
    await expect(page.getByTestId("header")).toBeVisible();

   // Search Laptop
// ---------------------------------
await page.getByTestId("search-input").fill("Laptop");
await page.getByTestId("search-button").click();

await expect(page).toHaveURL(/search=Laptop/i);

await expect(page.getByTestId("product-card-prod-002")).toBeVisible();

await page.getByTestId("add-to-cart-prod-002").click();

await expect(page.getByTestId("cart-count")).toHaveText("1");

// ---------------------------------
// Search Coffee Maker
// ---------------------------------
await page.getByTestId("search-input").fill("Coffee Maker");
await page.getByTestId("search-button").click();

await expect(page).toHaveURL(/search=Coffee/i);

await expect(page.getByTestId("product-card-prod-013")).toBeVisible();

await page.getByTestId("add-to-cart-prod-013").click();

await expect(page.getByTestId("cart-count")).toHaveText("2");

// ---------------------------------
// Search Book
// ---------------------------------
await page.getByTestId("search-input").fill("Book");
await page.getByTestId("search-button").click();

await expect(page).toHaveURL(/search=Book/i);

await expect(page.getByTestId("product-card-prod-023")).toBeVisible();

await page.getByTestId("add-to-cart-prod-023").click();

await expect(page.getByTestId("cart-count")).toHaveText("3");

// Click Cart
await page.getByTestId("cart-link").click();

// Verify Cart Page
await expect(page.getByTestId("cart-page")).toBeVisible();

await expect(page.getByTestId("cart-heading"))
    .toContainText("Shopping Cart");

   // ---------------------------------------
// Validate Cart Page
// ---------------------------------------

await expect(page.getByTestId("cart-page")).toBeVisible();

await expect(page.getByTestId("cart-heading"))
    .toContainText("Shopping Cart");

// ---------------------------------------
// Validate All Selected Products Displayed
// ---------------------------------------

await expect(page.getByTestId("cart-item-prod-002")).toBeVisible();

await expect(page.getByTestId("cart-item-prod-013")).toBeVisible();

await expect(page.getByTestId("cart-item-prod-023")).toBeVisible();

// ---------------------------------------
// Validate Product Names
// ---------------------------------------

await expect(page.getByTestId("cart-item-name-prod-002"))
    .toContainText("ThinSlate 15 Laptop");

await expect(page.getByTestId("cart-item-name-prod-013"))
    .toContainText("BrewMaster Coffee Maker");

await expect(page.getByTestId("cart-item-name-prod-023"))
    .toContainText("The DevOps Handbook");

// ---------------------------------------
// Validate Product Images
// ---------------------------------------

await expect(page.locator('img[alt="ThinSlate 15 Laptop"]'))
    .toBeVisible();

await expect(page.locator('img[alt="BrewMaster Coffee Maker"]'))
    .toBeVisible();

await expect(page.locator('img[alt="The DevOps Handbook"]'))
    .toBeVisible();

// ---------------------------------------
// Validate Product Prices
// ---------------------------------------

await expect(page.getByTestId("cart-item-price-prod-002"))
    .not.toHaveText("");

await expect(page.getByTestId("cart-item-price-prod-013"))
    .not.toHaveText("");

await expect(page.getByTestId("cart-item-price-prod-023"))
    .not.toHaveText("");

// ---------------------------------------
// Validate Cart Count
// ---------------------------------------

await expect(page.getByTestId("cart-count"))
    .toHaveText("3");

    // ---------------------------------------
// Validate Product Quantity - Laptop
// ---------------------------------------

await expect(page.getByTestId("cart-qty-value-prod-002"))
    .toHaveText("1");
    await expect(page.getByTestId("cart-qty-value-prod-013"))
    .toHaveText("1");
    await expect(page.getByTestId("cart-qty-value-prod-023"))
    .toHaveText("1");

    // ---------------------------------------
// Validate Cart Subtotal
// ---------------------------------------

const laptopPrice = Number(
    (await page.getByTestId("cart-item-price-prod-002").textContent())
        ?.replace(/[^\d.]/g, "")
);

const coffeePrice = Number(
    (await page.getByTestId("cart-item-price-prod-013").textContent())
        ?.replace(/[^\d.]/g, "")
);

const bookPrice = Number(
    (await page.getByTestId("cart-item-price-prod-023").textContent())
        ?.replace(/[^\d.]/g, "")
);

const expectedSubtotal = laptopPrice + coffeePrice + bookPrice;

const actualSubtotal = Number(
    (await page.getByTestId("cart-subtotal").textContent())
        ?.replace(/[^\d.]/g, "")
);

expect(actualSubtotal).toBe(expectedSubtotal);










 

// Verify Order Summary
await expect(page.getByTestId("order-summary")).toBeVisible();
await expect(page.getByTestId("cart-subtotal")).toBeVisible();

const subtotal = (await page
    .getByTestId("cart-subtotal")
    .textContent())?.trim();

console.log("Cart Subtotal:", subtotal);
await expect(page.getByTestId("cart-total"))
    .toBeVisible();

const total = await page
    .getByTestId("cart-total")
    .textContent();

console.log("Cart Total :", total);

// Click Checkout
await page.getByTestId("checkout-button").click();

// Verify Checkout Page
await expect(page.getByTestId("checkout-page")).toBeVisible();

// -------------------------
// Guest Information
// -------------------------

await page.getByTestId("guest-name-input").fill("Karthikeyan");

await page.getByTestId("guest-email-input").fill("karthikeyan@test.com");

await page.getByTestId("guest-phone-input").fill("9876543210");

// -------------------------
// Shipping Address
// -------------------------

await page.getByTestId("shipping-street-input")
    .fill("123 Main Street");

await page.getByTestId("shipping-city-input")
    .fill("Chennai");

// Select State
await page.getByTestId("shipping-state-select")
    .selectOption("IN");

// Zip Code
await page.getByTestId("shipping-zip-input")
    .fill("60001");

    // Country
await page.getByTestId("shipping-country-input")
    .fill("India");

// Continue to Payment
await page.getByTestId("continue-to-payment-button").click();

// Verify Payment Page
await page.waitForURL("**/payment");

await expect(page.getByTestId("payment-page")).toBeVisible();
// Verify Payment Form
await expect(page.getByTestId("payment-form")).toBeVisible();

// Card Holder Name
await page.getByTestId("payment-card-name")
    .fill("jane");

// Card Number
await page.getByTestId("payment-card-number")
    .fill("4485341305987173");   // or use the test card number provided by the application

// Expiry
await page.getByTestId("payment-expiry")
    .fill("12/30");

// CVV
await page.getByTestId("payment-cvv")
    .fill("123");

// Place Order
await expect(page.getByTestId("place-order-button")).toBeVisible();
await page.getByTestId("place-order-button").click();

// Verify Order Confirmation Page
await page.waitForURL(/order-confirmation/);

await expect(page.getByTestId("order-confirmation-page"))
    .toBeVisible();

// Verify Confirmation Heading
await expect(page.getByTestId("confirmation-heading"))
    .toContainText("Order Confirmed!");

// Verify Order Number Card
await expect(page.getByTestId("order-number-card"))
    .toBeVisible();

// Capture Order Number from UI
const orderNumber = await page
    .getByTestId("order-number")
    .textContent();

console.log("Order Number:", orderNumber);

// Validate Order Number Format
expect(orderNumber?.trim()).toMatch(/^RM-\d{8}-\d+$/);

await expect(page.getByTestId("order-totals")).toBeVisible();

await expect(page.getByTestId("confirmation-total"))
    .not.toHaveText("");
});