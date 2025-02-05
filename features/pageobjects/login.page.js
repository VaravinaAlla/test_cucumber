class LoginPage {
  get loginButton() {
    return $('[data-test="login-button"]');
  }
  get errorMessage() {
    return $('[data-test="error"]');
  }

  async open() {
    await browser.url('/');
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.getText();
  }
}

export default new LoginPage();
