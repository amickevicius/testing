describe('Thor hammer prekės tikrinimas', () => {
  it('Turėtų rasti prekę „Thor hammer“ produktų sąraše', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.contains('Thor Hammer').click(); // Jei reikia pereiti į produktų puslapį
  });
});
