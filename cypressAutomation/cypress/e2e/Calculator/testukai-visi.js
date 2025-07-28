const testCases = [
  // --- ADD ---
  { num1: '5', num2: '3', operation: 'Add', expected: '8' },
  { num1: '-2', num2: '-3', operation: 'Add', expected: '-5' },
  { num1: '1.5', num2: '2.5', operation: 'Add', expected: '4' },
  { num1: 'abc', num2: '5', operation: 'Add', expectError: true },
  { num1: '6', num2: '', operation: 'Add', expectError: true },

  // --- SUBTRACT ---
  { num1: '9', num2: '4', operation: 'Subtract', expected: '5' },
  { num1: '-10', num2: '5', operation: 'Subtract', expected: '-15' },
  { num1: '', num2: '4', operation: 'Subtract', expectError: true },

  // --- MULTIPLY ---
  { num1: '6', num2: '7', operation: 'Multiply', expected: '42' },
  { num1: '-4', num2: '-2', operation: 'Multiply', expected: '8' },
  { num1: '5', num2: 'xyz', operation: 'Multiply', expectError: true },

  // --- DIVIDE ---
  { num1: '8', num2: '2', operation: 'Divide', expected: '4' },
  { num1: '10.0', num2: '2.5', operation: 'Divide', expected: '4' },
  { num1: '', num2: '', operation: 'Divide', expectError: true },
  { num1: '10', num2: '0', operation: 'Divide', expectError: true },

  // --- CONCATENATE ---
  { num1: '12', num2: '34', operation: 'Concatenate', expected: '1234' },
  { num1: 'abc', num2: '123', operation: 'Concatenate', expected: 'abc123' },
  { num1: '5.5', num2: 'xyz', operation: 'Concatenate', expected: '5.5xyz' },
];