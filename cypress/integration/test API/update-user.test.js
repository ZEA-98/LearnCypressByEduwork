describe('Update User', () => {
    it("successfully update user", () => {
        var user ={
            "name": "Joko",
            "job": "satpam"
        }
        cy.request('PUT','https://reqres.in/api/User/2',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    });
});