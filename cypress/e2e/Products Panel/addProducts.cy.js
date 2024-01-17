import loginData from "../../data/loginData";
import productsObject from "../../pages/Login Object/productsObject";
import Login from "../../pages/Login Object/loginObject";

describe("Products section", () => {

    beforeEach(() => {
        cy.visit("/");
        Login.NewLogin(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Add the first product to cart", () => {
        productsObject.addProduct();
        productsObject.getCartIcon().should('have.text', '1');
    });

    it("@Smoke - Add product to cart and delete it", () => {
        productsObject.addProduct();
        productsObject.addProductAndDelete();
        productsObject.getProductInCart().should('not.exist')
    })

    it("@Smoke - Add more than one product", () => {
        productsObject.addMultipleProducts();
        productsObject.getCartIcon().invoke('text').then(value => {expect(parseInt(value)).to.be.greaterThan(1);
        });        
    });

});