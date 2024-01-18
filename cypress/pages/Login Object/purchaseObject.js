class Purchase {

    getCartIcon() {
        return cy.get('span.shopping_cart_badge')
    }

    getCheckoutButton() {
        return cy.get('[data-test="checkout"]')
    }

    getNameInput() {
        return cy.get('[data-test="firstName"]')
    }

    getLastNameInput() {
        return cy.get('[data-test="lastName"]')
    }

    getPostalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]')
    }

    getFinishButton() {
        return cy.get('[data-test="finish"]')
    }

    getSuccessfulPurchase() {
        return cy.get('h2.complete-header')
    }

    getMessageError() {
        return cy.get('div.error-message-container.error')
    }

    newPurchase = (name, lastname, postalcode) => {
        this.getCartIcon().click()
        this.getCheckoutButton().click()
        this.getNameInput().type(name)
        this.getLastNameInput().type(lastname)
        this.getPostalCodeInput().type(postalcode)
        this.getContinueButton().click()
        this.getFinishButton().click()
    }

    missingName = (lastname, postalcode) => {
        this.getCartIcon().click()
        this.getCheckoutButton().click()
        this.getNameInput()
        this.getLastNameInput().type(lastname)
        this.getPostalCodeInput().type(postalcode)
        this.getContinueButton().click()
    }

    missingLastName = (name, postalcode) => {
        this.getCartIcon().click()
        this.getCheckoutButton().click()
        this.getNameInput().type(name)
        this.getLastNameInput()
        this.getPostalCodeInput().type(postalcode)
        this.getContinueButton().click()
    }

    missingPostalCode = (name, postalCode) => {
        this.getCartIcon().click()
        this.getCheckoutButton().click()
        this.getNameInput().type(name)
        this.getLastNameInput().type(postalCode)
        this.getPostalCodeInput()
        this.getContinueButton().click()
    }
}

export default new Purchase(); 