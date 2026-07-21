import { test } from "@playwright/test";

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({

            path: `screenshots/${testInfo.title}.png`,

            fullPage: true

        });

    }

});