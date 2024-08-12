import credentials from "../../fixtures/applyData.json";
import mainPage from "../../page_objects/main.page";
import joblistingPage from "../../page_objects/joblisting.page";
import applyFormPage from "../../page_objects/applyForm.page";

describe("Main workflow", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("whole e2e test", () => {
    cy.intercept("POST", "/indexes/kforcewebjobentity/docs/search?api-version=2016-09-01").as("getListOfJobs");
    mainPage.findWorkHeader.realHover();
    cy.wait(1000);
    mainPage.searchJobsLinkTextHint.contains("Find tomorrow’s opportunities, today").and("is.visible");
    mainPage.searchJobsLink.realHover().click();
    joblistingPage.searchBarInput.type("QA Automation");
    cy.wait("@getListOfJobs");
    joblistingPage.searchButton.click();
    joblistingPage.vacancyNameSearchResult.eq(0).click({ force: true });
    joblistingPage.applyTodayButton.click();
    applyFormPage.firstNameInput.type(credentials.firstName);
    applyFormPage.lastNameInput.type(credentials.lastName);
    applyFormPage.emailInput.type(credentials.primaryEmail);
    applyFormPage.verifyEmailInput.type(credentials.primaryEmail);
    applyFormPage.phoneInput.type(credentials.phone);
    applyFormPage.zipCodeInput.type(credentials.zip);
    applyFormPage.stateDropdown.select(credentials.state);
    applyFormPage.countryDropdown.select(credentials.country);
    applyFormPage.employmentEligibilityRadioButton.check();
    applyFormPage.employmentEligibilityRadioButton.should("be.checked");
    applyFormPage.attachFileButton.selectFile("cypress/fixtures/cv.docx");
  });
});
