class Products {

    getAddBackpack() {
        return cy.get('button.btn.btn_primary.btn_small.btn_inventory[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    getAddBikeLights() {
        return cy.get('button.btn.btn_primary.btn_small.btn_inventory[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    getCartIcon() {
        return cy.get('span.shopping_cart_badge')
    }

    getDeleteProduct() {
        return cy.get('button.btn.btn_secondary.btn_small.cart_button[data-test="remove-sauce-labs-backpack"]')
    }

    getProductInCart() {
        return cy.get('.cart_item')
    }

    addProduct = () => {
        this.getAddBackpack().click()
    }

    addProductAndDelete = () => {
        this.getCartIcon().click()
        this.getDeleteProduct().click()
    }

    addMultipleProducts = () => {
        this.getAddBackpack().click()
        this.getAddBikeLights().click()
    }
}

export default new Products