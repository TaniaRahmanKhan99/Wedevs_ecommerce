import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.form = page.locator('form').first();

    this.email = this.form.locator('input[type="email"]');
    this.password = this.form.locator('input[type="password"]');

    this.loginBtn = this.form.locator('button');
  }

  async goto() {
    await this.page.goto('https://ratul.staging.dokandev.com/login', {
      waitUntil: 'domcontentloaded'
    });

    await this.form.waitFor({ state: 'visible', timeout: 15000 });
  }

  async login(user) {
    await this.email.fill(user.email);
    await this.password.fill(user.password);

    await this.loginBtn.click();
  }
}