import errorMessages from "../../fixtures/errorMessages.json"

describe("Negative Testing while applying", () => {
    beforeEach(() => {
      cy.errorHandler();
      cy.visit("/find-work/search-jobs");
    });

    it("Should display Error messages when submitting empty form", () => {
        cy.get('[class="linkForJob"]').eq(0).click();
        cy.get('[value="Apply Today"]').click();
        cy.get('[value="Submit"]').click()
        cy.contains(errorMessages.emailRequiredMessage)
        cy.contains(errorMessages.emailVerificationRequiredMessage)
        cy.contains(errorMessages.firstNameRequiredMessage)
        cy.contains(errorMessages.lastNameRequiredMessage)
        cy.contains(errorMessages.postalCodeRequiredMessage)
        cy.contains(errorMessages.resumeRequiredMessage)
        cy.contains(errorMessages.stateRequiredMessage)
        cy.get('[class="closeError btn-line-darkCerulean"]').click()
    })

    it.only("Should pop Error message when uploading incorrect CV format", () => {
      cy.get('[class="linkForJob"]').eq(0).click();
      cy.get('[value="Apply Today"]').click();
      cy.get('[type="file"]').selectFile('cypress/fixtures/test.jpg')
      cy.get('[id="kforceAlerts_title"]').should('be.visible')
      cy.get('[id="kforceAlerts_message"]').should('contain.text', errorMessages.formatCVPopUpMessage)

    })

})