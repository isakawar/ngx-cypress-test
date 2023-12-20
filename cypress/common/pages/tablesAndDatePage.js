export default class TablesAndDatePage {
  _tablesPageEndpoint = '/pages/tables/smart-table'
  _addButton = '.ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted'
  _idField = '[ng-reflect-name="id"]'
  _firstNameField = '[ng-reflect-name="firstName"]'
  _lastNameField = '[ng-reflect-name="lastName"]'
  _usernameField = '[ng-reflect-name="username"]'
  _emailField = '[ng-reflect-name="email"]'
  _ageField = '[ng-reflect-name="age"]'
  _submitButton = '.nb-checkmark:first-of-type'
  _editFirstLineButton = '[ng-reflect-klass="ng2-smart-row"]:first-child .nb-edit'
  _viewId = 'tr.ng-star-inserted td:nth-child(2)'
  _viewFirstName = 'tr.ng-star-inserted td:nth-child(3)'
  _viewLastName = 'tr.ng-star-inserted td:nth-child(4)'
  _viewUsername = 'tr.ng-star-inserted td:nth-child(5)'
  _viewEmail = 'tr.ng-star-inserted td:nth-child(6)'
  _viewAge = 'tr.ng-star-inserted td:nth-child(7)'
  openPage(){
    cy.visit(this._tablesPageEndpoint)
  }

  clickAddButton(){
    cy.get(this._addButton).click()
  }

  fillUserFields(userData) {
    cy.get(this._idField).type(userData.id);
    cy.get(this._firstNameField).type(userData.firstName);
    cy.get(this._lastNameField).type(userData.lastName);
    cy.get(this._usernameField).type(userData.username);
    cy.get(this._emailField).type(userData.email);
    cy.get(this._ageField).type(userData.age);
  }

  clickSubmitUserData(){
    cy.get(this._submitButton).click()
  }

  validateUserProfileFirstLine(userData){
    cy.get(this._viewId).contains(userData.id)
    cy.get(this._viewFirstName).contains(userData.firstName)
    cy.get(this._viewLastName).contains(userData.lastName)
    cy.get(this._viewUsername).contains(userData.username)
    cy.get(this._viewEmail).contains(userData.email)
    cy.get(this._viewAge).contains(userData.age)
  }

  clickEditFirstUser(){
    cy.get(this._editFirstLineButton).click()
  }
  clearUserFields(){
    cy.get(this._idField).clear()
    cy.get(this._firstNameField).clear()
    cy.get(this._lastNameField).clear()
    cy.get(this._usernameField).clear()
    cy.get(this._emailField).clear()
    cy.get(this._ageField).clear()
  }
}
