describe('learning selectors', () => {
  it('selectors', () => {
    cy.visit('https://login.yahoo.com/');

    //Id selecttor
    //cy.get('#login-username').type('test@yahoo.com');

    //name
    //cy.get('[name="username"]').type('name@yahoo.com');

    //class selector
    //cy.get('.phone-no').type('calss@yahoo.com');

    //css selector
    //cy.get('#login-username').type('selector@yahoo.com');

    // xpath
    //cy.get('[id="login-username"]').type('xpath@yahoo.com');
    //cy.get('input[type="text"][autocomplete="username"]').type('xpathTwo@yahoo.com');
    cy.get('#login-signin').click();
  });
});
