class Login {

    getEmailField() {
        return cy.get('input.input_error[data-test="username"]')
    }

    getPasswordField() {
        return cy.get('input.input_error[data-test="password"]')
    }

    getButtonConfirmLogin() {
        return cy.get('input.submit-button.btn_action[data-test="login-button"]')
    }

    getLogo() {
        return cy.get('div.app_logo:contains("Swag Labs")')
    }

    NewLogin = (email, password) => {
        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getButtonConfirmLogin().click()
    }
}



export default new Login