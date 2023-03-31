/// <reference types = "cypress" />

describe("workinh with inputs", () => {
  it("visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });
  it("should try to login", () => {
    cy.get("#user_login").clear();
    cy.get("#user_login").type("username");

    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type("password");

    cy.get('input[name="submit"]').click();

    cy.get(".brand").contains("Zero Bank");
  });

  it("should show Pay Bills", () => {
    cy.get("#pay_bills_tab").click();
    cy.get("a").contains("Pay Bills");
    cy.get("a").contains("Pay Saved Payee");
    cy.get("h2").contains("Make payments to your saved payees");
  });

  it("should show make payments", () => {
    cy.get("#sp_payee").select("Apple");
    cy.get("#sp_account").select("Brokerage");
    cy.get('input[name="amount"]').type("100");
    cy.get('input[name="date"]').clear();
    cy.get('input[name="date"]').type("2022-08-12 {enter}");
    cy.get('input[name="description"]').type("make payments to apple");

    cy.get("#pay_saved_payees").click();

    cy.get("#alert_content").should(
      "contain.text",
      "The payment was successfully submitted."
    );
  });
});
