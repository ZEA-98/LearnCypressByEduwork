describe("Delete User", () => {
    it("successfully deleted user", () => {
        cy.request('DELETE', 'https://reqres.in/api/User/2').then((response)=>{
            expect(response.status).equal(204)
        });
    });
});