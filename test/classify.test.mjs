import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnalyzable } from '../src/core/classify.mjs';

test('recognizes analyzable extensions', async () => {
  for (const p of ['a.ts', 'b.tsx', 'c.js', 'd.jsx', 'e.mjs', 'f.cjs']) {
    assert.equal(await isAnalyzable(p), true, p);
  }
});

test('rejects unknown or missing extensions', async () => {
  for (const p of ['a.py', 'b.rb', 'Makefile', 'noext']) {
    assert.equal(await isAnalyzable(p), false, p);
  }
});

test('is case-insensitive', async () => {
  assert.equal(await isAnalyzable('A.TS'), true);
});
