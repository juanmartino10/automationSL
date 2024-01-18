import loginData from "../../data/loginData";
import Login from "../../pages/Login Object/loginObject";
import productsObject from "../../pages/Login Object/productsObject";
import purchaseObject from "../../pages/Login Object/purchaseObject";
import purchaseData from "../../data/purchaseData";

describe("Purchase", () => {

    beforeEach(() => {
        cy.visit("/");
        Login.NewLogin(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Success purchase", () => {
        const { name, lastName, postalCode } = purchaseData.validPurchase;
        productsObject.addProduct();
        purchaseObject.newPurchase(name, lastName, postalCode)
        purchaseObject.getSuccessfulPurchase().should('have.text', 'Thank you for your order!');
    });

    it("@Smoke - Buy more than one product", () => {
        const { name, lastName, postalCode } = purchaseData.validPurchase;
        productsObject.addMultipleProducts();
        purchaseObject.newPurchase(name, lastName, postalCode)
        purchaseObject.getSuccessfulPurchase().should('have.text', 'Thank you for your order!');
    })

    it("@Smoke - Negative test - Buy without filling out the name field", () => {
        const { lastName, postalCode } = purchaseData.validPurchase;
        productsObject.addProduct();
        purchaseObject.missingName(lastName, postalCode)
        purchaseObject.getMessageError().should('be.visible')
    })

    it("@Smoke - Negative test - Buy without filling out the last name field", () => {
        const { name, postalCode } = purchaseData.validPurchase;
        productsObject.addProduct();
        purchaseObject.missingName(name, postalCode)
        purchaseObject.getMessageError().should('be.visible')
    })

    it("@Smoke - Negative test - Buy without filling out the postal code field", () => {
        const { name, lastName } = purchaseData.validPurchase;
        productsObject.addProduct();
        purchaseObject.missingName(name, lastName)
        purchaseObject.getMessageError().should('be.visible')
    })
});