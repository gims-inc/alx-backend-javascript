/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using SUM in calculateNumber method of Utils', () => {
    const fxnspy = sinon.spy(Utils, 'calculateNumber');
    const consolespy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // console.log(consolespy.args); // Check the arguments passed to console.log

    expect(consolespy.calledWith('The total is: 120}')).to.be.true;
    expect(fxnspy.calledWith('SUM', 100, 20)).to.be.true;
    expect(fxnspy.callCount).to.be.equal(1);

    consolespy.restore();
    fxnspy.restore();
  });
});
