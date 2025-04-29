describe('Studio', () => {
  it('Exemplo do Cypress studio', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://example.cypress.io/');
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').type('katana123');
    cy.contains('button', 'Entrar').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    cy.get('[data-cy="user-name"]').should('be.visible');
    cy.get('[data-cy="welcome-message"]').should('be.visible');
    cy.get('[data-cy="welcome-message"]').should('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('ok', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').clear('p');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').clear('k');
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    cy.get(':nth-child(4) > .items-start > .flex-1 > .text-sm').click();
    cy.get('.text-3xl').should('be.visible');
    cy.get('.text-3xl').should('have.text', 'Kanban Board');
    /* ==== End Cypress Studio ==== */
  });
})