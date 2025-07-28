describe('Basic Calculator – Pagrindiniai testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
    cy.get('#selectBuild').select('Prototype');
  });

  it('Sudėtis – 5 + 3 = 8', () => {
    cy.get('#number1Field').clear().type('5');
    cy.get('#number2Field').clear().type('3');
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '8');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Atimtis – 9 - 4 = 5', () => {
    cy.get('#number1Field').clear().type('9');
    cy.get('#number2Field').clear().type('4');
    cy.get('#selectOperationDropdown').select('Subtract');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '5');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Daugyba – 6 * 7 = 42', () => {
    cy.get('#number1Field').clear().type('6');
    cy.get('#number2Field').clear().type('7');
    cy.get('#selectOperationDropdown').select('Multiply');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '42');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Dalyba – 10 / 2 = 5', () => {
    cy.get('#number1Field').clear().type('10');
    cy.get('#number2Field').clear().type('2');
    cy.get('#selectOperationDropdown').select('Divide');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '5');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Klaida – tekstas vietoj skaičiaus', () => {
    cy.get('#number1Field').clear().type('abc');
    cy.get('#number2Field').clear().type('3');
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('be.visible');
    cy.get('#numberAnswerField').should('have.value', '');
  });

  it('Dalyba iš nulio – 9 / 0 (tikimasi klaidos)', () => {
    cy.get('#number1Field').clear().type('9');
    cy.get('#number2Field').clear().type('0');
    cy.get('#selectOperationDropdown').select('Divide');
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('be.visible');
    cy.get('#numberAnswerField').should('have.value', '');
  });
  
  it('Concatenate – 12 ir 34 = 1234', () => {
    cy.get('#number1Field').clear().type('12');
    cy.get('#number2Field').clear().type('34');
    cy.get('#selectOperationDropdown').select('Concatenate');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '1234');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Concatenate – abc ir 123 = abc123', () => {
    cy.get('#number1Field').clear().type('abc');
    cy.get('#number2Field').clear().type('123');
    cy.get('#selectOperationDropdown').select('Concatenate');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', 'abc123');
    cy.get('#errorMsgField').should('not.be.visible');
  });

  it('Tušti laukai – nieko neįvedus (tikimasi klaidos)', () => {
    cy.get('#number1Field').clear();
    cy.get('#number2Field').clear();    
    cy.get('#calculateButton').click();
    cy.get('#errorMsgField').should('be.visible');
    cy.get('#numberAnswerField').should('have.value', '');
  });
});
