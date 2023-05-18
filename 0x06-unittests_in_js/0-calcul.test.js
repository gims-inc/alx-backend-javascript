const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('returns rounded positive sum', () => {
    assert.strictEqual(calculateNumber(4, 8), 12);
    assert.strictEqual(calculateNumber(1.9, 0), 2);
    assert.strictEqual(calculateNumber(6.1, 6.1), 12);
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(0.1, 0.6), 1);
  });

  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('returns rounded negative sum', () => {
    assert.strictEqual(calculateNumber(-4, 8), 4);
    assert.strictEqual(calculateNumber(-1.9, 0), -2);
    assert.strictEqual(calculateNumber(-6.1, 6.1), 0);
    assert.strictEqual(calculateNumber(-0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(-0.1, 0.6), 1);
  });
});
