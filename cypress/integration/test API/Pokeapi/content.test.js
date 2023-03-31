describe('Validate Header',() => {
    it("Successfully validate content-type", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')
    });
    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include',{name:'bulbasaur'})
    });

    it('succesfully validate content', () => {
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/limber').its('body').should('include',{name:'limber'})
           expect(response.body.name).to.equal('limber')
    });
        
        
});