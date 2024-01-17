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

    newPurchase = (name, lastname, postalcode) => {
        this.getCartIcon().click()
        this.getCheckoutButton().click()
        this.getNameInput().type(name)
        this.getLastNameInput().type(lastname)
        this.getPostalCodeInput().type(postalcode)
        this.getContinueButton().click()
    }
}

export default new Purchase(); 