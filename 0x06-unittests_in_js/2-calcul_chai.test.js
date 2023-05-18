/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('returns rounded positive sum', () => {
      expect(calculateNumber('SUM', 4, 8)).to.equal(12);
      expect(calculateNumber('SUM', 1.9, 0)).to.equal(2);
      expect(calculateNumber('SUM', 6.1, 6.1)).to.equal(12);
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
      expect(calculateNumber('SUM', 0.1, 0.6)).to.equal(1);
    });

    it('returns rounded negative sum', () => {
      expect(calculateNumber('SUM', -4, 8)).to.equal(4);
      expect(calculateNumber('SUM', -1.9, 0)).to.equal(-2);
      expect(calculateNumber('SUM', -6.1, 6.1)).to.equal(0);
      expect(calculateNumber('SUM', -0.1, 0.2)).to.equal(0);
      expect(calculateNumber('SUM', -0.1, 0.6)).to.equal(1);
    });
  });

  describe('sUBTRACT', () => {
    it('returns rounded positive subtract', () => {
      expect(calculateNumber('SUBTRACT', 4, 8)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1.9, 0)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 6.1, 6.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.1, 0.6)).to.equal(-1);
    });

    it('returns rounded negative subtract', () => {
      expect(calculateNumber('SUBTRACT', -4, 8)).to.equal(-12);
      expect(calculateNumber('SUBTRACT', -1.9, 0)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -6.1, 6.1)).to.equal(-12);
      expect(calculateNumber('SUBTRACT', -0.1, 0.2)).to.equal(-0);
      expect(calculateNumber('SUBTRACT', -0.1, 0.6)).to.equal(-1);
    });
  });

  describe('dIVIDE', () => {
    it('returns rounded positive divide', () => {
      expect(calculateNumber('DIVIDE', 4, 8)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1.9, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 6.1, 6.1)).to.equal(1);
      expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0.1, 0.6)).to.equal(0);
    });

    it('returns rounded negative divide', () => {
      expect(calculateNumber('DIVIDE', -4, 8)).to.equal(-0.5);
      expect(calculateNumber('DIVIDE', -1.9, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -6.1, 6.1)).to.equal(-1);
      expect(calculateNumber('DIVIDE', -0.1, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -0.1, 0.6)).to.equal(-0);
    });
  });
});
