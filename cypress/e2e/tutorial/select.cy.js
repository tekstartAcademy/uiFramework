describe('select tests', () => {
  it('selects a dropdown', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-select').scrollIntoView({ duration: 3000 });
    cy.get('.action-select').select('bananas');
    cy.get('.action-select').contains('bananas');
  });
});
