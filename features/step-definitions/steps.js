import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import { expect } from '@wdio/globals';


Given(/^User is located on the main page of saucedemo website$/, async () => {
  await LoginPage.open();
});

When(/^User clicks the "Login" button$/, async () => {
  await LoginPage.clickLogin();
});

Then(
  /^User should see "Epic sadface: Username is required" error message$/,
  async () => {
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).toEqual('Epic sadface: Username is required');
  }
);
