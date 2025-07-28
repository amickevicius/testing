describe('Meniu juostos testas', () => {
  it('Turėtų matytis kategorijų ir brandų meniu juosta', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.get('#navbarSupportedContent').should('be.visible');
  });
});