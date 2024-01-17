import loginData from "../../data/loginData";
import Login from "../../pages/Login Object/loginObject";
import logoutObject from "../../pages/Login Object/logoutObject";

describe("Logout", () => {

    beforeEach(() => {
        cy.visit("/");
        Login.NewLogin(loginData.validEmail, loginData.validPassword);
    });

    it("@Regression - Success Logout", () => {
        logoutObject.logout()
        logoutObject.getIndexLogo().should('be.visible')
    });
});