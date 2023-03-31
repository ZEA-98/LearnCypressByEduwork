/// <reference types = "cypress" />

describe('working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')   
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('should fill checkbox', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').type('checkbox')
    });

});

//pengulangan materi

/*/// <reference types="cypress" /> 

describe('working with inputs',()=>{
    it ('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    })
    
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    })

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').types('password')
    });

    it('should fill checbox', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').types('checkbox')
    });
}) */