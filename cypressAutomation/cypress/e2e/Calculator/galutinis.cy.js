const builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const testCases = [
  // ✅ Normalūs veiksmai
  { num1: '5', num2: '3', operation: 'Add', expected: '8' },
  { num1: '9', num2: '4', operation: 'Subtract', expected: '5' },
  { num1: '6', num2: '7', operation: 'Multiply', expected: '42' },
  { num1: '8', num2: '2', operation: 'Divide', expected: '4' },
  { num1: '12', num2: '34', operation: 'Concatenate', expected: '1234' },
/*

  // ✅ Su neigiamais skaičiais
  { num1: '-2', num2: '-3', operation: 'Add', expected: '-5' },
  { num1: '-10', num2: '5', operation: 'Subtract', expected: '-15' },
  { num1: '-4', num2: '-2', operation: 'Multiply', expected: '8' },

  // ✅ Float skaičiai (be integerOnly checkbox)
  { num1: '1.5', num2: '2.5', operation: 'Add', expected: '4' },
  { num1: '10.0', num2: '2.5', operation: 'Divide', expected: '4' },

  // ❌ Klaidų atvejai
  { num1: 'abc', num2: '5', operation: 'Add', expectError: true },
  { num1: '5', num2: 'xyz', operation: 'Multiply', expectError: true },
  { num1: '', num2: '4', operation: 'Subtract', expectError: true },
  { num1: '6', num2: '', operation: 'Add', expectError: true },
  { num1: '', num2: '', operation: 'Divide', expectError: true },
  { num1: '10', num2: '0', operation: 'Divide', expectError: true }, // dalyba iš nulio

  // ✅ Concatenate su raidėmis (net jei nelogiška)
  { num1: 'abc', num2: '123', operation: 'Concatenate', expected: 'abc123' },
  { num1: '5.5', num2: 'xyz', operation: 'Concatenate', expected: '5.5xyz' },

  */
  ];

builds.forEach((build) => {
  describe(`Testavimas su kalkuliatoriaus versija: ${build}`, () => {

    beforeEach(() => {
      cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
      cy.get('#selectBuild').select(build);
    });

    testCases.forEach((test) => {
      const title = `${test.operation}: ${test.num1} ir ${test.num2}`;

      it(title, () => {
        // Įvedami skaičiai ir pasirenkama operacija
        cy.get('#number1Field').clear().type(test.num1, {force: true});
        cy.get('#number2Field').clear().type(test.num2, {force: true});
        cy.get('#selectOperationDropdown').select(test.operation, {force: true});
        cy.get('#calculateButton').click();

        // Tikrinamas rezultatas arba klaida
        if (test.expectError) {
          cy.get('#errorMsgField').should('be.visible');
        } else {
          cy.get('#numberAnswerField').should('have.value', test.expected);
          cy.get('#errorMsgField').should('not.be.visible');
        }

        // Rezultato žymėjimas konsolėje
        cy.once('test:after:run', (testInfo) => {
          const symbol = testInfo.state === 'passed' ? '✅' : '❌';
          console.log(`${symbol} [Build ${build}] ${title}`);
        });
      });
    });

  });
});