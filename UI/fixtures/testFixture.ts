import { test as base } from "@playwright/test";
import { ShoppingFlow } from "../flows/ShoppingFlow";

type Fixtures = {

    shoppingFlow: ShoppingFlow;

};

export const test = base.extend<Fixtures>({

    shoppingFlow: async ({ page }, use) => {

        await use(new ShoppingFlow(page));

    }

});

export { expect } from "@playwright/test";