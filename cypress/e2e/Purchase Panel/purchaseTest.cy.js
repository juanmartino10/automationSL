import loginData from "../../data/loginData";
import Login from "../../pages/Login Object/loginObject";
import productsObject from "../../pages/Login Object/productsObject";
import purchaseObject from "../../pages/Login Object/purchaseObject";

describe("Purchase", () => {

    beforeEach(() => {
        cy.visit("/");
        Login.NewLogin(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Success purchase", () => {
        const name = "Juan"
        const lastName = "Martino"
        const postalCode = 11400
        productsObject.addProduct();
        purchaseObject.newPurchase(name, lastName, postalCode)
    });
});