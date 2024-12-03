/// <reference types="cypress" />

import { normalizeWhitespace } from '../../support/helper';

describe('download/upload test group', () => {
  beforeEach('setup', () => {
    cy.intercept('/users/login').as('login');
  });
  it('remove profile picture', () => {
    cy.visit('https://personal-media.vercel.app/');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('test@test.com');
    cy.get('#submitButton').click();
    cy.wait('@login');
    cy.get('h4').contains('Update Image').click();
    cy.get('#removeRef').click();
    cy.intercept('/users/me/avatar').as('avatarAction');
    cy.wait('@avatarAction');
    cy.get('#profileImg')
      .should('have.attr', 'src')
      .and('include', '../components/layout/images/01.png');
  });

  it('update profile picture', () => {
    cy.visit('https://personal-media.vercel.app/');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('test@test.com');
    cy.get('#submitButton').click();
    cy.wait('@login');
    cy.get('h4').contains('Update Image').click();
    cy.intercept('/users/me/avatar').as('avatarAction');
    cy.get('#image').selectFile('cypress/e2e/uploadImage/code.jpg', { force: true });
    cy.get('#updateRef').click();
    cy.wait('@avatarAction');
    cy.get('#profileImg')
      .should('have.attr', 'src')
      .and('not.include', '../components/layout/images/01.png')
      .and('include', 'blob:https://personal-media.vercel.app');
  });

  it('downloads profile picture', () => {
    cy.visit('https://personal-media.vercel.app/');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('test@test.com');
    cy.get('#submitButton').click();
    cy.wait('@login');
    cy.get('h4').contains('Update Image').click();
    cy.get('button').contains('Download Profile Image').click();

    // //check image was downloaded and exists in the download folder
    cy.readFile('cypress/downloads/profile-Image.png');
  });

  it('downloads and verify pdf', () => {
    cy.visit('https://personal-media.vercel.app/downloads');
    cy.get('button').contains('Download PDF').click();
    cy.fixture('lorem-ipsum.pdf').then((fixture) => {
      cy.readFile('cypress/downloads/Lorem-ipsum.pdf').then((download) => {
        // Use assert to avoid the infinite loop issue
        expect(fixture).to.equal(download);
      });
    });
  });

  it('should contain the expected text in the PDF', () => {
    cy.visit('https://personal-media.vercel.app/downloads');
    const fileText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    cy.get('button').contains('Download PDF').click();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const pdfName = 'Lorem-ipsum.pdf';

    cy.task('getPdfContent', { pdfName, dir: downloadsFolder }).then((content) => {
      expect(normalizeWhitespace(content.text)).to.include(fileText);
    });
  });
});
