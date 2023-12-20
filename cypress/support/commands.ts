import LoginPageLocators from '../common/enums/loginPageLocators.js';

declare global {
  namespace Cypress {
    interface Chainable {
      loginViaUi(email: string, password: string): Chainablevoid;
      visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): ChainableElement;
    }
  }
}

Cypress.Commands.add('loginViaUi', (email, password) => {
  cy.visit(LoginPageLocators.loginPageEndpoint);
  cy.get(LoginPageLocators.inputEmailField).type(email);
  cy.get(LoginPageLocators.inputPasswordField).type(password);
  cy.get(LoginPageLocators.rememberMeCheckBox).click();
  cy.get(LoginPageLocators.loginInButton).click();
});
