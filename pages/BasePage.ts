import { Page } from "@playwright/test";

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(url: string = "/") {
        await this.page.goto(url);
    }

    async click(testId: string) {
        await this.page.getByTestId(testId).click();
    }

    async fill(testId: string, value: string) {
        await this.page.getByTestId(testId).fill(value);
    }

    async select(testId: string, value: string) {
        await this.page.getByTestId(testId).selectOption(value);
    }

}