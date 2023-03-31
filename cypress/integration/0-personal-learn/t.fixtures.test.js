/// <reference types = "cypress" />

describe('working with inputs', () => {
    it('visit the website', () => {
        cy.visit('https://www.saucedemo.com') 
        cy.url().should('include', 'saucedemo.com')
    });
    
    it('should try to login', () => {
        cy.fixture('sauce').then(arza => {
            const username = arza.username
            const password = arza.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()  
            
            cy.get('span').contains('Products')
        });
        
    });

    it('should click add to card products', () => {
       
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    });

    it('should show product in shopping cart', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('span').contains('Your Cart')

        cy.get('#checkout').click()
        cy.get('span').contains('Checkout: Your Information')

    });

    it('should show checkout button', () => {
        cy.fixture("sauce").then(sauce=>{
        const FirstName = sauce.FirstName
        const LastName = sauce.LastName
        const PostalCode = sauce.PostalCode

        cy.get('#first-name').clear()
        cy.get('#first-name').type(FirstName)

        cy.get('#last-name').clear()
        cy.get('#last-name').type(LastName)

        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(PostalCode)

        cy.get('#continue').click()  

        cy.get('.title').contains('Checkout: Overview')
        cy.get('#finish').click()
        cy.get('.title').contains('Checkout: Complete!')

        });   
    }); 

});
