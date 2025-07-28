describe('Basic calculator Add operation', () => {
  const baseUrl = 'https://testsheepnz.github.io/BasicCalculator.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Add operation 5 ir 3', () => {
    cy.get('#number1Field').type('5');
    cy.get('#number2Field').type('3');
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#numberAnswerField').should('have.value', '8');
  });

  it('Error with letters in field', () => {
    cy.get('#number1Field').type('abc');
    cy.get('#number2Field').type('3');
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('be.visible');
  });
});
