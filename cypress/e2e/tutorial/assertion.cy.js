describe('learning assertion', () => {
  it('assert invalid email', () => {
    cy.visit('https://login.yahoo.com/');
    cy.get('#login-username').type('test-test@yahoo.com');
    cy.get('#login-signin').click();
    cy.get('#username-error').should('exist');
    const text = 'Sorry';

    //cy.get('#username-error').should('have.text', text);

    cy.get('#username-error').should('contain.text', text);
    cy.url().should('not.contain', 'account');
  });

  it('assert valid email', () => {
    cy.visit('https://login.yahoo.com/');
    cy.get('#login-username').type('test@yahoo.com');
    cy.get('#login-signin').click();
    cy.get('#username-error').should('exist');
    cy.url().should('contain', 'account');
  });
});
