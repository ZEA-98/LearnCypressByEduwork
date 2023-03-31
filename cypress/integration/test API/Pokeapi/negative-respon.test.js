describe('Validate Header',() => {
    it("Successfully validate content-type", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')
    });

    it.only('Successfully negative response', () => {
        cy.request({
            method : "GET",
            url : 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork') 
        
        cy.get('@eduwork').its('status').should('equal', 404)

    });
        
})