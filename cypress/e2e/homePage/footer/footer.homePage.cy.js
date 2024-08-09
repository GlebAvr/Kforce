describe("Main Page functionality - Footer Links", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("Should Load main page", () => {
    cy.contains("Strength in unity");
  });

  it.only("Should open Search Job link", () => {
    cy.get('[href="/find-work/search-jobs/#/"]').click()
    cy.url().should('include', 'find-work/search-jobs');
  });
  it.only("Should open Find Work link", () => {
    cy.get('h3 [href="/find-work/"]').click()
    cy.url().should('include', 'find-work/');
  });

  it("Should open Submit your resume link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open KFORCEconnect link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open  Visa Sponsorship link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Talent Solutions link", () => {
    cy.contains("Strength in unity");
  });

  it("Should openTeam Solution link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Project Solution link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open International Talent Solutions link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Executive Leadership link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Sustainability link", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Careers at Kforce link", () => {
    cy.contains('Strength in unity')

});
it("Should open Newsroom link", () => {
    cy.contains('Strength in unity')

});
it("Should open Awards link", () => {
    cy.contains('Strength in unity')

});
});
