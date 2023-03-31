/// <reference types = "cypress"/>

describe('Browser actions',() => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://axample.com/')
        cy.pause()
        cy.contains('type').click
        cy.url().should('include', 'axample.com')
        cy.get('.cation-email')
          .type('')
          .should('have.value', )



        
    });
})