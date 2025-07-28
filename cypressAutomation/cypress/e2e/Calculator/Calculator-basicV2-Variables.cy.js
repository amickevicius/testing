describe('Basic test in calculator', () => {
  const baseUrl = 'https://testsheepnz.github.io/BasicCalculator.html';

    let num1 = String(59);
    let num2 = String(7);
    let result;

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Add', () => {
    result = Number(num1) + Number(num2);

    cy.get('#number1Field').clear().type(num1);
    cy.get('#number2Field').clear().type(num2);
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', result.toString());
  });

  it('Subtract', () => {
    result = Number(num1) - Number(num2);

    cy.get('#number1Field').clear().type(num1);
    cy.get('#number2Field').clear().type(num2);
    cy.get('#selectOperationDropdown').select('Subtract');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', result.toString());
  });

    it('Multiply', () => {
    result = Number(num1) * Number(num2);

    cy.get('#number1Field').clear().type(num1);
    cy.get('#number2Field').clear().type(num2);
    cy.get('#selectOperationDropdown').select('Multiply');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', result.toString());
  });

  it('Divide', () => {
    result = Number(num1) / Number(num2);

    cy.get('#number1Field').clear().type(num1);
    cy.get('#number2Field').clear().type(num2);
    cy.get('#selectOperationDropdown').select('Divide');
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', result);
    //cy.get('#numberAnswerField').should('have.value', result.toFixed(2));
  });

  it('Concatenate', () => {
    result = num1 + num2;
    cy.get('#number1Field').type(num1);
    cy.get('#number2Field').type(num2);
    cy.get('#selectOperationDropdown').select('Concatenate');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', result);
  });

  it('Error with letters in field', () => {
    cy.get('#number1Field').clear().type('abc');
    cy.get('#number2Field').clear().type(num2);
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('be.visible');
  });
});
