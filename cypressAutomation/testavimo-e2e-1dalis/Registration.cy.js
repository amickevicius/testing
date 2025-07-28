describe('Vartotojo registracija', () => {
  it('Turėtų užregistruoti naują vartotoją', () => {
    cy.visit('https://practicesoftwaretesting.com/');

    // Spaudžiam "My Account" arba "Register"
    cy.contains('Sign in').click();
    cy.contains('Register your account').click();

    // Užpildome registracijos formą
    cy.get('#first_name').type('tescius');
    cy.get('#last_name').type('tesniauskas');
    cy.get('#street').type('Bevarde gatve');
    cy.get('#postal_code').type('12345');
    cy.get('#city').type('Miestelius');
    cy.get('#state').type('Emiratiniai');
    cy.get('#country').select('Lithuania');
    cy.get('#phone').type('3706123456');
    cy.get('#email').type('email123@emailll.com');
    cy.get('[data-test="dob"]').type('1990-01-01');
    cy.get('[data-test="password"]').type('Testinispasw123!');
    cy.contains('Register').click();
    
  });
});


