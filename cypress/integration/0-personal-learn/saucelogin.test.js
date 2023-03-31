/// <reference types = "cypress" />

describe('working with inputs', () => {
    it('visit the website', () => {
        cy.visit('https://www.saucedemo.com') 
        cy.url().should('include', 'saucedemo.com')
    });
    it('should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });

    it('should fill password', () => {
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('password') 
    });

    it('should try to login', () => {
        cy.fixture("sauce").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()    
        });
        
    });

});
