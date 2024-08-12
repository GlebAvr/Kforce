class MainPage {
    get findWorkHeader() {return cy.get('[class="desktop-dropdown upper-open-1"]')}
    get searchJobsLinkTextHint() {return cy.get('[class="sub-text"]')}
    get searchJobsLink() {return cy.get('[class="desktop-dropdown"] [href="/find-work/search-jobs/"]')}
    
}

export default new MainPage()