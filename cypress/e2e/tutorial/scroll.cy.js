describe('pop up', () => {
  it('google pop up', () => {
    cy.visit('https://google.com');

    const termsAndCondtion = cy.get('button').contains('Accept all');
    termsAndCondtion.should('exist');
    termsAndCondtion.scrollIntoView({ duration: 2000 });
    termsAndCondtion.should('be.visible');
  });
});
