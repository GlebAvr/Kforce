describe("Main Page functionality - Footer Links", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.errorHandler();
    cy.visit("/");
  });

  it("Should Load main page", () => {
    cy.contains("Strength in unity");
  });

  it("Should open Search Job link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/find-work/search-jobs/#/"]').click();
    cy.url().should("include", "find-work/search-jobs");
  });
  it("Should open Find Work link", () => {
    cy.get('h3 [href="/find-work/"]').click();
    cy.url().should("include", "find-work/");
  });

  it("Should open Submit your resume link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/submit-resume/"]').click();
    cy.url().should("include", "submit-resume/");
  });

  it("Should open KFORCE connect link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="https://www.kforce.com/kforceconnect-referral-app/"]').click();
    cy.url().should("include", "kforceconnect-referral-app/");
  });

  it("Should open  Visa Sponsorship link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/find-work/visa-sponsorship-solutions/"]').click();
    cy.url().should("include", "find-work/visa-sponsorship-solutions/");
  });

  it("Should open Talent Solutions link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/solutions/talent-solutions/"]').click();
    cy.url().should("include", "talent-solutions/");
  });

  it("Should open Team Solution link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/solutions/team-solutions/"]').click();
    cy.url().should("include", "team-solutions/");
  });

  it("Should open Project Solution link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/solutions/project-solutions/"]').click();
    cy.url().should("include", "project-solutions/");
  });

  it("Should open International Talent Solutions link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/solutions/international-talent-solutions/"]').click();
    cy.url().should("include", "international-talent-solutions/");
  });

  it("Should open Executive Leadership link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/about/executive-leadership/"]').click();
    cy.url().should("include", "executive-leadership/");
  });

  it("Should open Sustainability link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/about/esg/"]').click();
    cy.url().should("include", "about/esg/");
  });

  it("Should open Careers at Kforce link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/about/careers-at-kforce/"]').click();
    cy.url().should("include", "about/careers-at-kforce/");
  });

  it("Should open Newsroom link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/about/newsroom/"]').click();
    cy.url().should("include", "about/newsroom/");
  });

  it("Should open Awards link", () => {
    cy.get('[class="col-xs-12 col-sm-6 col-md-3"] [href="/about/awards/"').click();
    cy.url().should("include", "about/awards/");
  });
});
