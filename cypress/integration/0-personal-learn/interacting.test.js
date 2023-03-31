/// <reference types = "cypress"/>  

describe('Browser Actions', () => {
    it('should books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout : 10000} )
        cy.url().should('include','index.html')
    });

    it('should click on Travel Category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text','Travel')
        
    });

});

//pengulangan materi
/*/// <reference types = "cypress"/>

describe ('browser action',() => {
    it('should books website',() => {
        cy.visit('https://books.toscrape.com/index.html',{ timeout : 10000})
        cy.url().should('include','html')
    });

    it('should click on travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });
});*/