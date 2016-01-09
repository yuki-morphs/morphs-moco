const { describe, it } = require('mocha');
const assert = require('assert');

describe('Initial test', () => {
  it('should run a test', () => {
    const [a, , b] = [1, 2, 3];
    assert.equal(a, 1);
    assert.equal(b, 3);
  });
});
