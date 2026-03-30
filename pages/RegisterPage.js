import { expect } from '@playwright/test';

export class RegisterPage {
  constructor(page) {
    this.page = page;

    // Scope form first (VERY IMPORTANT)
    this.form = page.locator('form').first();

    // Safe locators inside form
    this.firstName = this.form.locator("//input[@id='reg-firstname']");
    this.lastName = this.form.locator("//input[@id='reg-lastname']");
    this.email = this.form.locator('//input[type="email"]');
    this.password = this.form.locator("//input[@id='reg-password']");
    this.confirmPassword = this.form.locator("//input[@id='reg-password-confirmation']");

    this.submitBtn = this.form.locator("//button[normalize-space()='Create Account']");
  }

  async goto() {
    await this.page.goto('https://ratul.staging.dokandev.com/register', {
      waitUntil: 'domcontentloaded'
    });

    await this.form.waitFor({ state: 'visible', timeout: 15000 });
  }

  async register(user) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);

    await this.submitBtn.click();
  }
}