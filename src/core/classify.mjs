// Core file classification.
// Classifies a file path as analyzable or not, based on its extension.
export function isAnalyzable(filePath) {
  const dot = filePath.lastIndexOf('.');
  if (dot === -1) return false;
  const ext = filePath.slice(dot).toLowerCase();
  return ANALYZABLE_EXTENSIONS.has(ext);
}

const ANALYZABLE_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
]);
