import {test, expect} from "../src/fixtures/test.fixture"
import { TEST_DATA, PRODUCT_IDS } from "../src/config/constants"

test("Remove Product Validation", async ({ order, evidence, page }, testInfo) => {
    await order.addMultipleProductsToCart();
    
    await order.removeProductValidation();
    
    await testInfo.attach("Empty Cart State", {
        body: await page.screenshot(),
        contentType: "image/png"
    });
});

test("Payment Failure Validation", async ({ order, evidence, page }, testInfo) => {
    await order.addToCart();
    
    await order.continueCheckout();
    await order.fillCheckoutDetails();
    
    await order.fillPaymentDetails();
    
    await testInfo.attach("Payment Failure State", {
        body: await page.screenshot(),
        contentType: "image/png"
    });
});
