"use strict";

const assert = require('assert');

describe('Initial test', () => {
  it('should run a test', () => {
    let [a, , b] = [1,2,3];
    assert.equal(a, 1);
    assert.equal(b, 3);
  });
});
