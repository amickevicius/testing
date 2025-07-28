describe('Vartotojo login', () => {
  beforeEach(() => {
    // Ignoruojam frontend klaidas (pvz., "parentNode")
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('parentNode')) {
        return false;
      }
    });
  });

  it('Vartotojo prisijungimas su intercept', () => {
    // Pradedam stebėti paieškos API (tikrą)
    cy.intercept({resourceType:/xhr|fetch/}, {log:false});

    cy.visit('https://bigbox.lt/prisijungimas?back=my-account');
    cy.viewport(1280, 800);

    // GDPR
    cy.wait(1500);
    cy.get('#accept-all-gdpr').click();
    cy.get('.gdprModal--visible').should('not.exist');

    // Login
    cy.wait(1500);
    cy.get('#email').type('vijelis597@asimarif.com');
    cy.get('#passwd').type('Testinis123.');
    cy.get('button[id="SubmitLogin"] span').click();
    cy.wait(2500);

    // Paieška
    cy.get('input[placeholder="Paieška..."]').should('be.visible').type('iphone{enter}');

    // Likusi navigacija
    cy.get('.glass-frame').should('be.visible').click();

    cy.get("div[class='product-title'] a[title='Telefonas Apple iPhone 16 128GB Black']").should('be.visible').click();
    cy.get('form[id="buy_block"] a[title*="krepšelį"]').should('be.visible').click();
    cy.wait(3500);
    cy.get('.btn.btn-secondary').click({force: true});
    cy.get('.cart-image').should('be.visible').click();
    cy.get('#cart-summary-next-step').click('');
    cy.get("div[class='address-next-step-block'] a[class='bb-primary-button']").click('');
    cy.get('#delivery_option_871841_5').click('');
    cy.get('#carrier-next-step').click('');
    cy.wait(500);
    cy.get("span[class='radio-container'] label[for='codfeeid_7']").click('');
  });
});