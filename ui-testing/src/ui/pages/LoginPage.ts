import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login() {
  await this.page.getByTestId('demo-login-user-001').click();
  await this.page.getByTestId('login-submit-button').click();
  }
}