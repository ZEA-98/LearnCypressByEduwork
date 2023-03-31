/// <reference types = "cypress" />

describe("working with inputs", () => {
  it("visit the website", () => {
    cy.visit("https://www.saucedemo.com/checkout-step-one.html");
    cy.url().should("include", "checkout-step-one.html");
  });
  it("should fill firstName", () => {
    cy.get("#first-name").clear();
    cy.get("#first-name").type("firstName");
  });

  it("should fill lastName", () => {
    cy.get('input[name="lastName"]').clear();
    cy.get('input[name="lastName"]').type("lastName");
  });

  it("should try to chockout", () => {
    cy.fixture("sauceout").then((user) => {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const portalCode = user.portalCode;

      cy.get("#first-name").clear();
      cy.get("#first-name").type(firstName);

      cy.get('input[name="lastName"]').clear();
      cy.get('input[name="lastName"]').type(lastName);

      cy.get('input[name="portalCode"]');
      cy.get('input[name="portalCode"]').type(portalCode);

      cy.get('input[name="continue"]').click();
    });
  });
});
