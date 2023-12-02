import TablesAndDataPageLocators from '../enums/tablesAndDataPageLocators.js'
export default class TablesAndDatePage {
  openPage(){
    cy.visit('/pages/tables/smart-table')
  }

  clickAddButton(){
    cy.get(TablesAndDataPageLocators.addButton).click()
  }

  fillUserFields(userData) {
    cy.get(TablesAndDataPageLocators.idField).type(userData.id);
    cy.get(TablesAndDataPageLocators.firstNameField).type(userData.firstName);
    cy.get(TablesAndDataPageLocators.lastNameField).type(userData.lastName);
    cy.get(TablesAndDataPageLocators.usernameField).type(userData.username);
    cy.get(TablesAndDataPageLocators.emailField).type(userData.email);
    cy.get(TablesAndDataPageLocators.ageField).type(userData.age);
  }

  clickSubmitUserData(){
    cy.get(TablesAndDataPageLocators.submitButton).click()
  }

  validateUserProfileFirstLine(userData){
    cy.get(TablesAndDataPageLocators.viewId).contains(userData.id)
    cy.get(TablesAndDataPageLocators.viewFirstName).contains(userData.firstName)
    cy.get(TablesAndDataPageLocators.viewLastName).contains(userData.lastName)
    cy.get(TablesAndDataPageLocators.viewUsername).contains(userData.username)
    cy.get(TablesAndDataPageLocators.viewEmail).contains(userData.email)
    cy.get(TablesAndDataPageLocators.viewAge).contains(userData.age)
  }

  clickEditFirstUser(){
    cy.get(TablesAndDataPageLocators.editFirstLineButton).click()
  }
  clearUserFields(){
    cy.get(TablesAndDataPageLocators.idField).clear()
    cy.get(TablesAndDataPageLocators.firstNameField).clear()
    cy.get(TablesAndDataPageLocators.lastNameField).clear()
    cy.get(TablesAndDataPageLocators.usernameField).clear()
    cy.get(TablesAndDataPageLocators.emailField).clear()
    cy.get(TablesAndDataPageLocators.ageField).clear()
  }
}
