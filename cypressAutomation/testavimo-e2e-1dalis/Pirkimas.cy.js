describe('Prekes pirkimas', () => {
  it('Visas funkcionalumas', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    /*cy.contains('Sign in').click();
    cy.get('#email').type('email123@emaill.com');
    cy.get('#password').type('Testinispasw123!');
    cy.get('[data-test="login-submit"]').click();
    cy.get('.nav-link.active').click('');*/
    cy.get('a[data-test="nav-categories"]').click('');
    cy.get('.dropdown-item[data-test="nav-hand-tools"]').click('');
    cy.get('a:nth-child(2) div:nth-child(2) h5:nth-child(1)').click('');
    cy.get('#btn-add-to-cart').click();
    cy.get('div[aria-label="Product added to shopping cart."]').click();
    cy.get('a[aria-label="cart"] fa-icon[class="ng-fa-icon px-1"] svg').click();
    cy.get('div[class="float-end ng-star-inserted"] button[type="button"]').click();
    cy.get('#email').type('email123@emailll.com');
    cy.get('#password').type('Testinispasw123!');
    cy.get('[data-test="login-submit"]').click();
    cy.get('div[class="col-md-6 offset-md-3 login-form-1"] div[class="float-end ng-star-inserted"] button[type="button"]').click();
    cy.get('#street').clear().type('Bevarde gatve');
    cy.get('#city').clear().type('Miestelius');
    cy.get('#state').clear().type('Emiratiniai');
    cy.get('#country').clear().type('Lithuania');
    cy.get('#postal_code').clear().type('12345');
    cy.get('div[class="col-md-6 offset-md-3 login-form-1"] div[class="float-end"] button[type="button"]').click();
    cy.get('#payment-method').select('Cash on Delivery');
    cy.get('button[data-test="finish"]').click('');
    cy.wait(1000);
    cy.get('button[data-test="finish"]').click('');
});

});
