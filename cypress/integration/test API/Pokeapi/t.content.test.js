describe('Validate content',() => {
    it.only('Successfully negative response', () => {
        cy.request({
            method : "GET",
            url : 'https://pokeapi.co/api/v2/pokemon/limber',
            failOnStatusCode: false
        }).as('limber') 
        
        cy.get('@limber').its('status').should('equal', 404)
           expect(response.body.name).equal('Not Found')

    });
        
});