import LoginPageLocators from '../../common/enums/loginPageLocators.js';
import TablesAndDatePage from "../../common/pages/tablesAndDatePage";



describe('Test login and Smart Table', { testIsolation: false},  () => {
  const tablesAndDatePage = new TablesAndDatePage
  const userCreateData = {
    id: 12,
    firstName: 'Vladyslav',
    lastName: 'Bilobrov',
    username: 'VB',
    email: 'test@test.com',
    age: 24
  }

  const userEditData = {
    id: 51,
    firstName: 'Mykola',
    lastName: 'Darvinov',
    username: 'Traula',
    email: 'test1234@test.com',
    age: 31
  }

  it('test login as user', () => {
    cy.loginViaUi(Cypress.env('CYPRESS_USER_EMAIL'), Cypress.env('CYPRESS_USER_PASSWORD'))
    cy.url().should('contain', '/pages')
  })

  it('test add new user', () => {
    tablesAndDatePage.openPage()
    tablesAndDatePage.clickAddButton()

    tablesAndDatePage.fillUserFields(userCreateData)
    tablesAndDatePage.clickSubmitUserData()

    tablesAndDatePage.validateUserProfileFirstLine(userCreateData)
  })


  it('test edit of user data', () => {
    tablesAndDatePage.clickEditFirstUser()
    tablesAndDatePage.clearUserFields()

    tablesAndDatePage.fillUserFields(userEditData)
    tablesAndDatePage.clickSubmitUserData()

    tablesAndDatePage.validateUserProfileFirstLine(userEditData)
  })
})


