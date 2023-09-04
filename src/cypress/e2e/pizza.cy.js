describe('testler', () => {
    it('inputa metin giren test', () => {
        cy.visit("http://localhost:3000/pizza");
        cy.get('#special-text')
            .type('Acı sos istiyorum').should('have.value', 'Acı sos istiyorum')
    });

    it('coklu secim yapan test', () => {
        cy.visit("http://localhost:3000/pizza");
        cy.get('[type="checkbox"]').check('sucuk', 'jalepeno', 'sosis', 'misir'); 
    });

    it('formu gonderen test', () => {
        cy.visit("http://localhost:3000/pizza");

    });
})