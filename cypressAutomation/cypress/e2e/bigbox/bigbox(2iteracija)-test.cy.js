describe('Vartotojo login', () => {
  beforeEach(() => {
    cy.intercept({resourceType:/xhr|fetch/}, {log:false});
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('parentNode')) return false;
    });
    cy.session("Login session", () => {
            cy.visit("https://bigbox.lt/prisijungimas?back=my-account")
 
            cy.get('#email').clear().type("vijelis597@asimarif.com")
            cy.get('#passwd').type("Testinis123.")
            cy.get("#SubmitLogin").click()
            cy.wait(5000)
        });
    //cy.get('#accept-all-gdpr').click();
    //cy.get('.gdprModal--visible').should('not.exist');
    cy.viewport(1280, 800);
    });
  it.skip('1. Prisijungia kaip vartotojas', () => {
    cy.visit('https://bigbox.lt/mano_profilis');
  });

  it.skip('2. Ieško iPhone ir pasirenka produktą', () => {
    cy.visit('https://www.bigbox.lt');
    cy.get("input[placeholder='Paieška...']").type('iphone{enter}');
    cy.wait(500);
    cy.get("div[class='product-title'] a[title*='iPhone 16']").first().click();  
  });

  it('3. Įdeda pasirinktą prekę į krepšelį', () => {
    cy.visit('https://www.bigbox.lt');
    cy.wait(1500);
    cy.get('input[placeholder="Paieška..."]').should('be.visible').type('iphone{enter}');
    cy.get('.glass-frame').should('be.visible').click();
    cy.get("div[class='product-title'] a[title='Telefonas Apple iPhone 16 128GB Black']")
      .should('be.visible')
      .click();
    cy.get('form[id="buy_block"] a[title*="krepšelį"]').should('be.visible').click();
    cy.wait(1000);
    cy.get('.btn.btn-secondary').click({force: true});
    cy.get('.cart-image').click();
  });

    it('4. Vykdo pirkimo žingsnius iki užsakymo patvirtinimo', () => {
    cy.visit('https://www.bigbox.lt');
    cy.wait(1000);
    cy.get('.cart-image').click();
    cy.get('#cart-summary-next-step').should('be.visible').click();
    cy.contains("div[class='address-next-step-block'] a[class='bb-primary-button']")
      .should('be.visible')
      .click();
    cy.get('input[name="payment_method"]').first().check({ force: true });
    cy.get('#cart-summary-next-step').click();
    cy.contains('Užsakymo peržiūra').should('be.visible');
    });
  });