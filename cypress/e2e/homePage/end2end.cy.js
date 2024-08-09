import credentials from "../../fixtures/applyData.json";

describe("Main workflow", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("whole e2e test", () => {
    cy.get('[class="desktop-dropdown upper-open-1"]').trigger("mouseover", { force: true });
    cy.get('[href="/find-work/search-jobs/"]').eq(0).click({ force: true });
    //  click()
    //  cy.get('[href="/find-work/search-jobs/"][title="Search Jobs"]').click()
    cy.get('[placeholder="Search by Job Title or Skill"]').type("QA Automation");
    cy.get('[class="search-icon submitIcon"]').click();
    cy.get('[class="linkForJob"]').eq(0).click();
    //  cy.get('[class="col-xs-12 col-sm-12 data-job-desc"]').should('contain.text', 'QA')
    cy.get('[value="Apply Today"]').click();
    cy.get('[name="firstName"]').type(credentials.firstName);
    cy.get('[name="lastName"]').type(credentials.LastName)
    cy.get('[id="emailAddress"]').type(credentials.PrimaryEmail)
    cy.get('[id="emailAddressVerify"]').type(credentials.PrimaryEmail)
    cy.get('[id="phoneNumberAll"]').type(credentials.phone)
    cy.get('[id="postalCode"]').type(credentials.zip)
    cy.get('[id="state"]').select('California')
    // cy.contains('California').click()
    cy.get('[for="eligibility0"] [type="radio"]').check()
    cy.get('[for="eligibility0"] [type="radio"]').should('be.checked')
    cy.get('[type="file"]').selectFile('cypress/fixtures/cv.docx')

  });
});
