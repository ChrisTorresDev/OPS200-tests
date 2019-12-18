const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have an monthlyPayment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });
});
