import { test as base, expect } from "./evidence";

import { AddToCartFlow } from '../flows/AddToCartFlow';

export const test = base.extend<{
    addToCartFlow: AddToCartFlow}> ({
    addToCartFlow: async ({ page }, use) => {
        await use(new AddToCartFlow(page));
    },
});

export {expect} from '@playwright/test';