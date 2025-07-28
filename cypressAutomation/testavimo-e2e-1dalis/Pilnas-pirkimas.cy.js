describe('Prekės pirkimas', () => {
  it('Visas funkcionalumas', () => {
    cy.visit('https://practicesoftwaretesting.com/');

    // Naršymas iki prekės
    cy.get('a[data-test="nav-categories"]').click();
    cy.get('.dropdown-item[data-test="nav-hand-tools"]').click();
    cy.get('a:nth-child(2) div:nth-child(2) h5:nth-child(1)').click();

    // Įdedame į krepšelį
    cy.get('#btn-add-to-cart').click();
    cy.wait(2000);

    // ✅ Patikrinimas: Prekė įkrito į krepšelį
    cy.contains('Product added to shopping cart.').should('be.visible');

    // Atidarome krepšelį
    cy.get('[aria-label="cart"] fa-icon[class="ng-fa-icon px-1"] svg').click();

    // ✅ Patikrinimas: Krepšelyje yra prekė ir nurodyta kaina
    cy.get('.product-title').should('exist'); // prekės pavadinimas
    cy.get('span[data-test="product-price"]').should('contain', '$'); // ar yra kaina su simboliu

    // Pereiname prie pirkimo
    cy.wait(1000);
    cy.get('div[class="float-end ng-star-inserted"] button[type="button"]').click();

    // Prisijungimas
    cy.get('#email').type('email123@emailll.com');
    cy.get('#password').type('Testinispasw123!');
    cy.get('[data-test="login-submit"]').click();

    cy.get('app-login button[type="button"]').click('');

    // Adreso suvedimas
    cy.get('#street').clear().type('Bevarde gatve');
    cy.get('#city').clear().type('Miestielius');
    cy.get('#state').clear().type('Eminatinai');
    cy.get('#country').clear().type('Lithuania');
    cy.get('#postal_code').clear().type('12345');

    cy.get('app-address button[type="button"]').click('');

    // ✅ Patikrinimas: Adreso laukai užpildyti teisingai
    cy.get('#street').should('have.value', 'Bevarde gatve');
    cy.get('#city').should('have.value', 'Miestielius');
    cy.get('#state').should('have.value', 'Eminatinai');
    cy.get('#country').should('have.value', 'Lithuania');
    cy.get('#postal_code').should('have.value', '12345');

    // Apmokejimo metodas
    cy.get('#payment-method').select('Cash on Delivery');

    cy.get('button[data-test="finish"]').click('');
    
    // Paskutinis mygtukas su laukimu
    cy.get('button[data-test="finish"]').should('be.visible').click();
    cy.wait(1000);
    cy.get('button[data-test="finish"]').click('');

    // ✅ Patikrinimas: Pirkimas sėkmingas
    cy.contains('#order-confirmation').should('be.visible');
  });
});