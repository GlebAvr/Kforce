class ListingPage {
get searchBarInput() {return cy.get('[placeholder="Search by Job Title or Skill"]')}
get searchButton() {return cy.get('[class="search-icon submitIcon"]')}
get vacancyNameSearchResult () {return cy.get('[class="linkForJob"]')}
get applyTodayButton() {return cy.get('[value="Apply Today"]')}    
}

export default new ListingPage()