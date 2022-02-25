import { describe, it, assert } from 'vitest';
import NodeModule from '../lib';

describe('NodeModule', () => {
  it('should create some tests here to validate', () => {
    assert.equal(NodeModule('s'), 's');
  });
})