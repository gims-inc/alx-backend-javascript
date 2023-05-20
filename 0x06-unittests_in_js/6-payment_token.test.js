/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('successfull response from the API data', () => {
    const res = getPaymentTokenFromAPI();
    expect(res).to.be.an.instanceof(Promise);
  });
  // true
  it('getPaymentTokenFromAPI(success)', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  }));
  // false
  it('getPaymentTokenFromAPI(false)', () => {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        expect(res).to.equal('');
      });
  });
});
