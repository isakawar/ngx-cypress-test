import LayoutPage from '../../common/pages/layoutPage'
describe('Steps tab tests', function () {
  const stepsPage = new LayoutPage()

  before(function () {
    cy.clearCookies()
  })

  beforeEach(function () {
    stepsPage.openStepsTab()
  })

  it('should show valid title on each step', function () {
    stepsPage.getHorizontalContent().should('contain.text', 'Step content #1')

    stepsPage.clickNextButton()
    stepsPage.getHorizontalContent().should('contain.text', 'Step content #2')

    stepsPage.clickNextButton()
    stepsPage.getHorizontalContent().should('contain.text', 'Step content #3')

    stepsPage.clickNextButton()
    stepsPage.getHorizontalContent().should('contain.text', 'Step content #4')
  })

})
