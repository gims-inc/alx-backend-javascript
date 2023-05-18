const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using SUM in calculateNumber method of Utils', () => {
    const fxnspy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(fxnspy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(fxnspy.calculateNumber.callCount).to.be.equal(1);
    fxnspy.calculateNumber.restore();
  });
});
