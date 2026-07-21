// import { test as base, expect } from "@playwright/test";
// import { OrderFlow } from "../flows/OrderFlow";

// type FlowFixtures = {
//     order: OrderFlow;
// };

// export const test = base.extend<FlowFixtures>({
//     order: async ({ page }, use) => {
//         const order = new OrderFlow(page);
//         await use(order);
//     }
// });

// export { expect };


import { test, expect } from "./evidence.fixture";

export { test, expect };