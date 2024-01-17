class Logout {

    getAsideButton() {
        return cy.get('#react-burger-menu-btn')
    }

    getLogoutButton() {
        return cy.get('#logout_sidebar_link')
    }

    getIndexLogo() {
        return cy.get('div.login_logo:contains("Swag Labs")')

    }


    logout = () => {
        this.getAsideButton().click()
        this.getLogoutButton().click()
    }

}

export default new Logout