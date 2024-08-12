class ApplyForm {
    get firstNameInput() {return  cy.get('[name="firstName"]') }
    get lastNameInput() {return cy.get('[name="lastName"]') }
    get emailInput() {return cy.get('[id="emailAddress"]')}
    get verifyEmailInput() {return cy.get('[id="emailAddressVerify"]') }
    get phoneInput() {return cy.get('[id="phoneNumberAll"]') }
    get stateDropdown() {return cy.get('[id="state"]')}
    get zipCodeInput() {return cy.get('[id="postalCode"]') }
    get countryDropdown() {return cy.get('[id="countryID"]') }
    get employmentEligibilityRadioButton() {return cy.get('[for="eligibility0"] [type="radio"]')}
    get attachFileButton() {return cy.get('[type="file"]')}
    get submitButton () {return cy.get('[value="Submit"]')}
    get validationWindowCloseButton() {return cy.get('[class="closeError btn-line-darkCerulean"]')}
    get wrongFileFormatWindow() {return cy.get('[id="kforceAlerts_title"]')}
    get wrongFileFormatMessage() {return cy.get('[id="kforceAlerts_message"]')}
    }
    
    export default new ApplyForm()