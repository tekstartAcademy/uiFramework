describe('pop up', () => {
  it('google pop up', () => {
    cy.visit('https://google.com');

    const termsAndCondtion = cy.get('button').contains('Accept all');
    if (termsAndCondtion) {
      termsAndCondtion.click();
    }
  });
});
