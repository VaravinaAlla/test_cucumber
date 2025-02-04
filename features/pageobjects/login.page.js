class LoginPage {
  get loginButton() {
    return $('[data-test="login-button"]');
  }
  get errorMessage() {
    return $('[data-test="error"]');
  }

  open() {
    browser.url('/');
  }

  clickLogin() {
    this.loginButton.click();
  }

  getErrorMessage() {
    return this.errorMessage.getText();
  }
}

export default new LoginPage();
