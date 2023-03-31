describe('Create New User', () => {
    it("Successfully create new user", () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
        cy.request('POST', 'https://reqres.in/api/User', user).then((response) =>{
            expect(response.status).equal(201)
            
        cy.request('POST','https://reqres.in/api/User',user).its('body').should('include',{name:'Eduwork'})
        cy.request('POST','https://reqres.in/api/User',user).its('body').should('include',{job:'Education'})
            expect(response.body.name).equal(user.name) 
            expect(response.body.job).equal(user.job)
        })   
    })
}) 