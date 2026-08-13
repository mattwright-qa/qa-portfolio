import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldDeleteCart } from '../src/cart-retention.js';

test('free-plan saved carts remain for 30 days from the last cart update', () => {
  const result = shouldDeleteCart({
    plan: 'free',
    cartUpdatedDaysAgo: 2,
    accountUpdatedDaysAgo: 10,
  });
  assert.equal(result, false);
});
