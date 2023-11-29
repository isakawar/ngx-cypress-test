import LayoutPageLocators from '../enums/layoutPageLocators'
export default class LayoutPage {
  openStepsTab() {
    cy.visit(LayoutPageLocators.stepsEndpoint)
  }

  clickNextButton() {
    cy.get(LayoutPageLocators.nextButton).contains('next').click()
  }

  getHorizontalContent() {
    return cy.get(LayoutPageLocators.horizontalContent)
  }
}
