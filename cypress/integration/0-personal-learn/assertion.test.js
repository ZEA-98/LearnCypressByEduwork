/// <reference types = "cypress"/>

describe("Browser actions", () => {
  it("should load correct url", () => {
    cy.visit("https://axample.com/", { timeout: 10000 });
  });

  it("should check correct url", () => {
    cy.url().should("include", "axample.com");
  });

  it("should check for correct element on the page", () => {
    cy.get("h1").should("not.visible");
  });
});
