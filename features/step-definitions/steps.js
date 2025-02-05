import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';
import { expect } from '@wdio/globals';

Given(/^User is located on the main page of saucedemo website$/, async () => {
  await loginPage.open();
});

When(/^User clicks the "Login" button$/, async () => {
  await loginPage.clickLogin();
});

Then(
  /^User should see "([^"]*)" error message$/,
  async (expectedErrorMessage) => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toEqual(expectedErrorMessage);
  }
);
