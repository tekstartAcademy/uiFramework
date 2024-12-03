describe('checkbox', () => {
  it('Checks all the boxes', () => {
    cy.visit('https://example.cypress.io/commands/actions');

    const checboxOne = cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').eq(0);

    const checboxTwo = cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').eq(1);

    //check the checkboxes
    checboxOne.check();

    checboxTwo.check();

    //assert checkbpxes were checked
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked');

    //we unchecked the checkboxes
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').uncheck();

    // we assert the checkboxes were unchecked
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('not.be.checked');
  });
});
