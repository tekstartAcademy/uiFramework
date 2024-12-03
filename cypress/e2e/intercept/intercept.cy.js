describe('intercept test group', () => {
  it('intercept get /post', () => {
    cy.visit('https://personal-media.vercel.app/');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('test@test.com');
    cy.get('#submitButton').click();
    // cy.intercept('users/login', (req) => {
    //   req.continue((res) => {
    //     res.body['token'] = 'basic fooabc123';
    //     expect(res.statusCode).eql(202);
    //   });
    // });
    cy.get('.Toastify').should('contain.text', 'Login successful');
    // cy.intercept('/posts*', [
    //   {
    //     _id: '6637b0ff0bfd3a00088a12f0',
    //     description: 'Sir I am here',
    //     owner: '64b476809728f400109b0540',
    //     name: 'Fake User One',
    //     createdAt: '2029-05-01T16:17:03.773Z',
    //     updatedAt: '2029-05-01T20:17:03.773Z',
    //     __v: 0,
    //   },
    //   {
    //     _id: '64b4769a9728f400109b0554',
    //     description: 'Hello John Lewis',
    //     owner: '64b476809728f400109b0540',
    //     name: 'Fake User Two',
    //     createdAt: '2025-07-20T23:00:42.515Z',
    //     updatedAt: '2025-07-10T23:15:32.348Z',
    //     __v: 0,
    //   },
    // ]);

    cy.intercept('/posts*', (req) => {
      req.headers['authorization'] = 'basic fooabc123';
      req.continue((res) => {
        expect(res.statusCode).eq(401);
      });
    }).as('posts');

    cy.get('@posts');
  });
});
