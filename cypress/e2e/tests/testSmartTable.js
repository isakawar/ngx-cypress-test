import TablesAndDataPage from "../../common/pages/tablesAndDatePage";

describe('Login and User Management in Smart Table Tests', { testIsolation: false},  () => {
  const tablesAndDataPage = new TablesAndDataPage();
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

  it('should successfully log in as a user', () => {
    cy.loginViaUi(Cypress.env('CYPRESS_USER_EMAIL'), Cypress.env('CYPRESS_USER_PASSWORD'))
    cy.url().should('contain', '/pages')
  })

  it('should add a new user', () => {
    tablesAndDataPage.openPage()
    tablesAndDataPage.clickAddButton()

    tablesAndDataPage.fillUserFields(userCreateData)
    tablesAndDataPage.clickSubmitUserData()

    tablesAndDataPage.validateUserProfileFirstLine(userCreateData)
  })

  it('should edit user data', () => {
    tablesAndDataPage.clickEditFirstUser()
    tablesAndDataPage.clearUserFields()

    tablesAndDataPage.fillUserFields(userEditData)
    tablesAndDataPage.clickSubmitUserData()

    tablesAndDataPage.validateUserProfileFirstLine(userEditData)
  })
})
