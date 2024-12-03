describe('Nav Menus', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // Set viewport to 1280px x 720px (desktop)
      cy.viewport(1280, 720);
    });

    it('displays full header', () => {
      cy.login();
    });
  });

  context('iPhone 5 resolution', () => {
    beforeEach(() => {
      // Set viewport to iPhone 5 dimensions (mobile)
      cy.viewport('iphone-5');
    });

    it('displays mobile menu on click', () => {
      cy.login();
    });
  });
});

describe('', () => {
  context('', () => {
    beforeEach(() => {});

    it('', () => {});
  });
});
