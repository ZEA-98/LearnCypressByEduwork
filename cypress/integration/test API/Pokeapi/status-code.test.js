/// <reference types ="cypress"/>

describe('Automation API with pokeapi',() => {
    it("Successfully validate content-type", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
       
    it.only('Successfully validate status code with params', () => {
        cy.request({
            method : "GET",
            url : 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
});