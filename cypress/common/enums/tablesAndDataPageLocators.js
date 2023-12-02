export default class TablesAndDataPageLocators {
  static tablesPageEndpoint = '/pages/tables/smart-table'

  static addButton = '.ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted'

  static idField = '[ng-reflect-name="id"]'

  static firstNameField = '[ng-reflect-name="firstName"]'

  static lastNameField = '[ng-reflect-name="lastName"]'

  static usernameField = '[ng-reflect-name="username"]'

  static emailField = '[ng-reflect-name="email"]'

  static ageField = '[ng-reflect-name="age"]'

  static submitButton = '.nb-checkmark:first-of-type'

  static editFirstLineButton = '[ng-reflect-klass="ng2-smart-row"]:first-child .nb-edit'

  static viewId = 'tr.ng-star-inserted td:nth-child(2)'

  static viewFirstName = 'tr.ng-star-inserted td:nth-child(3)'

  static viewLastName = 'tr.ng-star-inserted td:nth-child(4)'

  static viewUsername = 'tr.ng-star-inserted td:nth-child(5)'

  static viewEmail = 'tr.ng-star-inserted td:nth-child(6)'

  static viewAge = 'tr.ng-star-inserted td:nth-child(7)'
}
