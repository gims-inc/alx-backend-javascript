/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using SUM in calculateNumber method of Utils', () => {
    const fxnstub = sinon.stub(Utils, 'calculateNumber');
    fxnstub.returns(10);
    const consolespy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(consolespy.calledWith('The total is: 10')).to.be.true;
    expect(fxnstub.calledWith('SUM', 100, 20)).to.be.true;
    expect(fxnstub.callCount).to.be.equal(1);

    consolespy.restore();
    fxnstub.restore();
  });
});
