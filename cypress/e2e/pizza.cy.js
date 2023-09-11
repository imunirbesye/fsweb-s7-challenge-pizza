describe('testler', () => {
  it('inputa metin giren test', () => {
      cy.visit("http://localhost:3000/"); 
      cy.get('#order-pizza').click();
      cy.get('#special-text')
          .type('Acı sos istiyorum').should('have.value', 'Acı sos istiyorum')
  });

  it('coklu secim yapan test', () => {
      cy.visit("http://localhost:3000/");
      cy.get('#order-pizza').click();
      cy.get('[type="checkbox"]').check('sucuk', 'jalepeno', 'sosis', 'misir'); 
  });

  it('formu gonderen test', () => {
      cy.visit("http://localhost:3000/");
      cy.get('#order-pizza').click();
      cy.get('[type="radio"]').check('orta').should('have.value', 'orta');
      cy.get('select').select('ince').should('have.value', 'ince');
      cy.get('[type="checkbox"]').check('sucuk', 'sosis', 'misir');
      cy.get('#input-name').type('Münir BESYE').should('have.value', 'Münir BESYE');
      cy.get('#special-text').type('Acısı bol olsun').should('have.value', 'Acısı bol olsun');
      cy.get('button').click();
  });
});