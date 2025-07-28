describe('Basic Calculator – Prototype: dinaminis statusas', () => {
  const baseUrl = 'https://testsheepnz.github.io/BasicCalculator.html';

  const testCases = [
    // ✅ Normalūs veiksmai
    { num1: '5', num2: '3', operation: 'Add' },
    { num1: '9', num2: '4', operation: 'Subtract' },
    { num1: '6', num2: '7', operation: 'Multiply' },
    { num1: '8', num2: '2', operation: 'Divide' },
    { num1: '12', num2: '34', operation: 'Concatenate' },

    // ✅ Su neigiamais skaičiais
    { num1: '-2', num2: '-3', operation: 'Add' },
    { num1: '-10', num2: '5', operation: 'Subtract' },
    { num1: '-4', num2: '-2', operation: 'Multiply' },

    // ✅ Float skaičiai
    { num1: '1.5', num2: '2.5', operation: 'Add' },
    { num1: '10.0', num2: '2.5', operation: 'Divide' },

    // ❌ Klaidų atvejai
    { num1: 'abc', num2: '5', operation: 'Add', expectError: true },
    { num1: '5', num2: 'xyz', operation: 'Multiply', expectError: true },
    { num1: '', num2: '4', operation: 'Subtract', expectError: true },
    { num1: '6', num2: '', operation: 'Add', expectError: true },
    { num1: '', num2: '', operation: 'Divide', expectError: true },
    { num1: '10', num2: '0', operation: 'Divide', expectError: true }, // dalyba iš nulio

    // ✅ Concatenate su raidėmis
    { num1: 'abc', num2: '123', operation: 'Concatenate' },
    { num1: '5.5', num2: 'xyz', operation: 'Concatenate' },
  ];

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  testCases.forEach((test) => {
    const title = `${test.operation}: ${test.num1} ir ${test.num2}`;

    it(title, () => {
      // Įvedame duomenis į skaičiuotuvą
      cy.get('#number1Field').clear().type(test.num1);
      cy.get('#number2Field').clear().type(test.num2);
      cy.get('#selectOperationDropdown').select(test.operation);
      cy.get('#calculateButton').click();

      // Paprasta if / else logika
      if (test.expectError) {
        // Jei tikimasi klaidos – patikriname, ar rodomas klaidos pranešimas
        cy.get('#errorMsgField').should('be.visible');
        

      } else {
        // Jei duomenys geri – paskaičiuojame rezultatą ir tikriname
        const num1 = parseFloat(test.num1);
        const num2 = parseFloat(test.num2);
        let expected;

        if (test.operation === 'Add') {
          expected = (num1 + num2).toString();
        } else if (test.operation === 'Subtract') {
          expected = (num1 - num2).toString();
        } else if (test.operation === 'Multiply') {
          expected = (num1 * num2).toString();
        } else if (test.operation === 'Divide') {
          expected = (num1 / num2).toString();
        } else if (test.operation === 'Concatenate') {
          expected = test.num1 + test.num2;
        }

        cy.get('#numberAnswerField').should('have.value', expected);
        cy.get('#errorMsgField').should('not.be.visible');
      }

      // Paprastas simbolis loge (✅ arba ❌)
      cy.once('test:after:run', (testInfo) => {
        const symbol = testInfo.state === 'passed' ? '✅' : '❌';
        console.log(`${symbol} ${title}`);
      });
    });
  });
});
