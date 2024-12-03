/// <reference types="cypress" />

describe('open browsers', () => {
  it('open google', () => {
    cy.visit('https://google.com');
  });

  it('open facebook', () => {
    cy.visit('https://facebook.com');
  });

  it('opens x', () => {
    cy.visit('https://x.com');
  });
});
