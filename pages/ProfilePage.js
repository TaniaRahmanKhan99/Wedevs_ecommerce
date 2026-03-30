import { expect } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.page = page;

    this.profileText = page.locator('text=/profile|dashboard|account/i');
  }

  async verifyProfile() {
    await expect(this.profileText.first()).toBeVisible({
      timeout: 15000
    });
  }
}