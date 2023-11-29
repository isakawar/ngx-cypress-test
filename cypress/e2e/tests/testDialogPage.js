import ModalOverlaysPage from '../../common/pages/modalOverlaysPage'

describe('Dialog tab tests', function () {
  const modalOverlaysPage = new ModalOverlaysPage

  before(function () {
    cy.clearCookies()
  })

  beforeEach(function () {
    modalOverlaysPage.openDialogTab()
  })

  it('Should open dialog pop-up and display header, cancel and submit buttons ', function (){
    modalOverlaysPage.openEnterYourNamePopUp()
    modalOverlaysPage.checkVisibleModalWindow()
    modalOverlaysPage.getModalWindowHeader().should('contain.text', 'Enter your name')
    modalOverlaysPage.getCancelButton().should('be.visible')
    modalOverlaysPage.getSubmitButton().should('be.visible')
  })
})
