import errorMessages from "../../fixtures/errorMessages.json";
import joblistingPage from "../../page_objects/joblisting.page";
import applyFormPage from "../../page_objects/applyForm.page";

describe("Negative Testing while applying", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/find-work/search-jobs");
  });

  it("Should display Error messages when submitting empty form", () => {
    joblistingPage.vacancyNameSearchResult.eq(0).click({ force: true });
    joblistingPage.applyTodayButton.click();
    applyFormPage.submitButton.click();
    cy.contains(errorMessages.emailRequiredMessage);
    cy.contains(errorMessages.emailVerificationRequiredMessage);
    cy.contains(errorMessages.firstNameRequiredMessage);
    cy.contains(errorMessages.lastNameRequiredMessage);
    cy.contains(errorMessages.postalCodeRequiredMessage);
    cy.contains(errorMessages.resumeRequiredMessage);
    cy.contains(errorMessages.stateRequiredMessage);
    applyFormPage.validationWindowCloseButton.click();
  });

  it("Should pop Error message when uploading incorrect CV format", () => {
    joblistingPage.vacancyNameSearchResult.eq(0).click({ force: true });
    joblistingPage.applyTodayButton.click();
    applyFormPage.attachFileButton.selectFile("cypress/fixtures/test.jpg");
    applyFormPage.wrongFileFormatWindow.should("be.visible");
    applyFormPage.wrongFileFormatMessage.should("contain.text", errorMessages.formatCVPopUpMessage);
  });
});
