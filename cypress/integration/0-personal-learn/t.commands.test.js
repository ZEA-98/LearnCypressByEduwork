/// <reference types = "cypress" />

describe("working with inputs", () => {
  it("visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });
  it("should try to login", () => {
    let username = "username";
    let password = "password";
    cy.login(username, password);

    cy.get(".brand").contains("Zero Bank");
  });

  it("should show Pay Bills", () => {
    cy.get("#pay_bills_tab").click();
    cy.get("a").contains("Pay Bills");
    cy.get("a").contains("Pay Saved Payee");
    cy.get("h2").contains("Make payments to your saved payees");
  });

  it("should show make payments", () => {
    let Payee = "Apple";
    let Account = "Brokerage";
    let Amount = "100";
    let Dated = "2022-08-12 {enter}";
    let Description = "make payments to apple";

    cy.pay(Payee, Account, Amount, Dated, Description);

    cy.get("#alert_content").should("contain.text", "The payment was successfully submitted.");
  });
});
