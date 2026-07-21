import { expect } from "@playwright/test";

export class ValidationUtils {

    static verifyOrderNumber(orderNumber: string) {

        expect(orderNumber)
            .toMatch(/^RM-\d{8}-\d+$/);

    }

    static verifyTotal(actual: number, expected: number) {

        expect(actual).toBe(expected);

    }

}