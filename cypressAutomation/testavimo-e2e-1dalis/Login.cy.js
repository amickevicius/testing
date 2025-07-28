describe('Vartotojo login', () => {
  it('Turėtų užregistruoti naują vartotoją', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.contains('Sign in').click();
    cy.get('#email').type('email123@email.com');
    cy.get('#password').type('Testinispasw123!');
    cy.get('[data-test="login-submit"]').click();
  });
});