import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    constructor(private readonly page: Page) {}

    private email(): Locator {
        return this.page.getByLabel("Email");
    }

    private password(): Locator {
        return this.page.getByLabel("Password");
    }

    private signInButton(): Locator {
        return this.page.getByRole("button", { name: "Sign in" });
    }

    async open(): Promise<void> {
        await this.page.goto("/login");
    }

    async enterEmail(email: string): Promise<void> {
        await this.email().fill(email);
        await expect(this.email()).toHaveValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.password().fill(password);
        await expect(this.password()).toHaveValue(password);
    }

    async clickSignIn(): Promise<void> {
        await expect(this.signInButton()).toBeVisible();
        await this.signInButton().click();
    }
}