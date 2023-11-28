import ModalOverlaysPageLocators from '../enums/modalOverlaysPageLocators'

export default class ModalOverlaysPage {
  openDialogTab(){
    cy.visit(ModalOverlaysPageLocators.dialogTabEndpoints)
  }
  openEnterYourNamePopUp() {
    cy.get(ModalOverlaysPageLocators.openDialogButtons).contains('Enter Name').click()
  }

  checkVisibleModalWindow() {
    cy.get(ModalOverlaysPageLocators.modalWindow).should('be.visible')
  }

  getModalWindowHeader(){
    return cy.get(ModalOverlaysPageLocators.modalWindowHeader)
  }

  getCancelButton(){
    return cy.get(ModalOverlaysPageLocators.cancelButton)
  }

  getSubmitButton() {
    return cy.get(ModalOverlaysPageLocators.submitButton)
  }

}
