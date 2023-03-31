/// <reference types= "cypress" />


describe('order to product', function () {
    before(()=>{
        cy.visit('https://www.saucedemo.com')
    });
    it('should button add to card', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    });

    it('should show button remove ', () => {
        cy.get('#remove-sauce-labs-backpack').click()
    });

});


