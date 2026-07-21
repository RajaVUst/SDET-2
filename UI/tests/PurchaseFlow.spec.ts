import { test } from "../fixtures/testFixture";

test("RetailMart Purchase Flow", async ({ shoppingFlow }) => {

    await shoppingFlow.completePurchase();

});