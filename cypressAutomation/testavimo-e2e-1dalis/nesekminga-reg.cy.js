describe('Nesėkmingos vartotojo registracijos testai', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.contains('Sign in').click();
    cy.contains('Register your account').click();
  });


  it('Nesėkminga registracija su netinkamu el. paštu', () => {
    cy.get('#first_name').type('tescius');
    cy.get('#last_name').type('tesniauskas');
    cy.get('#street').type('Bevarde gatve');
    cy.get('#postal_code').type('12345');
    cy.get('#city').type('Miestelius');
    cy.get('#state').type('Emiratiniai');
    cy.get('#country').select('Lithuania');
    cy.get('#phone').type('3706123456');
    cy.get('#email').type('email123email.com'); //be @
    cy.get('[data-test="dob"]').type('1990-01-01');
    cy.get('[data-test="password"]').type('Testinispasw123!');
    cy.contains('Register').click();

    cy.contains('Invalid email').should('be.visible'); // Priklausomai nuo validacijos
  });

  it('Nesėkminga registracija be slaptažodžio', () => {
    cy.get('#first_name').type('tescius');
    cy.get('#last_name').type('tesniauskas');
    cy.get('#street').type('Bevarde gatve');
    cy.get('#postal_code').type('12345');
    cy.get('#city').type('Miestelius');
    cy.get('#state').type('Emiratiniai');
    cy.get('#country').select('Lithuania');
    cy.get('#phone').type('3706123456');
    cy.get('#email').type('email123@email.com');
    cy.get('[data-test="dob"]').type('1990-01-01');
    //cy.get('[data-test="password"]').type('Testinispasw123!'); BE SLAPTAZODZIO
    cy.contains('Register').click();
  });

  it('Nesėkminga registracija su trumpu slaptažodžiu', () => {
    cy.get('#first_name').type('tescius');
    cy.get('#last_name').type('tesniauskas');
    cy.get('#street').type('Bevarde gatve');
    cy.get('#postal_code').type('12345');
    cy.get('#city').type('Miestelius');
    cy.get('#state').type('Emiratiniai');
    cy.get('#country').select('Lithuania');
    cy.get('#phone').type('3706123456');
    cy.get('#email').type('email123@email.com');
    cy.get('[data-test="dob"]').type('1990-01-01');
    cy.get('[data-test="password"]').type('Testi'); // trumpas slaptazodis
    cy.contains('Register').click();

    cy.contains('Password must be at least').should('be.visible');
  });
});