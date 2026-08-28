import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnalyzable } from '../src/core/classify.mjs';

test('recognizes analyzable extensions', () => {
  for (const p of ['a.ts', 'b.tsx', 'c.js', 'd.jsx', 'e.mjs', 'f.cjs']) {
    assert.equal(isAnalyzable(p), true, p);
  }
});

test('rejects unknown or missing extensions', () => {
  for (const p of ['a.py', 'b.rb', 'Makefile', 'noext']) {
    assert.equal(isAnalyzable(p), false, p);
  }
});

test('is case-insensitive', () => {
  assert.equal(isAnalyzable('A.TS'), true);
});
