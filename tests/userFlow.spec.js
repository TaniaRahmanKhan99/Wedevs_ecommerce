import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { testUser } from '../utils/testData';

test('User Registration → Login → Profile Verification', async ({ page }) => {

  const register = new RegisterPage(page);
  const login = new LoginPage(page);
  const profile = new ProfilePage(page);

  // ---------------- REGISTER ----------------
  await register.goto();
  await register.register(testUser);

  await page.waitForTimeout(3000);

  // ---------------- LOGIN ----------------
  await login.goto();
  await login.login(testUser);

  // ---------------- PROFILE ----------------
  await profile.verifyProfile();
});