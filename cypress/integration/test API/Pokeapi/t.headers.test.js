describe('Validate Header',() => {
    it("Successfully validate content-type", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')

        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto',).then((response) =>{
           expect(response.status).equal(200)

        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').its('body').should('include',{name:'ditto'})
           expect(response.body.name).equal('ditto')

        });
    
    });
        
});