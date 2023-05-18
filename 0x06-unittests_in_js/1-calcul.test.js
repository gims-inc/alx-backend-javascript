const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded positive sum', () => {
      assert.strictEqual(calculateNumber('SUM', 4, 8), 12);
      assert.strictEqual(calculateNumber('SUM', 1.9, 0), 2);
      assert.strictEqual(calculateNumber('SUM', 6.1, 6.1), 12);
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.6), 1);
    });

    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded negative sum', () => {
      assert.strictEqual(calculateNumber('SUM', -4, 8), 4);
      assert.strictEqual(calculateNumber('SUM', -1.9, 0), -2);
      assert.strictEqual(calculateNumber('SUM', -6.1, 6.1), 0);
      assert.strictEqual(calculateNumber('SUM', -0.1, 0.2), 0);
      assert.strictEqual(calculateNumber('SUM', -0.1, 0.6), 1);
    });
  });

  describe('sUBTRACT', () => {
    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded positive subtract', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 8), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.9, 0), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 6.1, 6.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.6), -1);
    });

    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded negative subtract', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4, 8), -12);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.9, 0), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -6.1, 6.1), -12);
      assert.strictEqual(calculateNumber('SUBTRACT', -0.1, 0.2), -0);
      assert.strictEqual(calculateNumber('SUBTRACT', -0.1, 0.6), -1);
    });
  });

  describe('dIVIDE', () => {
    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded positive divide', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 8), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 6.1, 6.1), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.6), 0);
    });

    // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
    it('returns rounded negative divide', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4, 8), -0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1.9, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -6.1, 6.1), -1);
      assert.strictEqual(calculateNumber('DIVIDE', -0.1, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -0.1, 0.6), -0);
    });
  });
});
