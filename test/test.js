import { describe, it } from 'mocha';
import assert from 'assert';
import version from '../src/version.js';

describe('Initial test', () => {
  it('should run a test', () => {
    const [a, , b] = [1, 2, 3];
    assert.equal(a, 1);
    assert.equal(b, 3);
  });
});

describe('Test Version', () => {
  it('should hava a valid version', () => {
    const currentVersion = version();
    assert.equal(currentVersion.major, 0);
    assert.equal(currentVersion.minor, 0);
    assert.equal(currentVersion.patch, 1);
  });
});
