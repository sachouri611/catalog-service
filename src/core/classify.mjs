// Core file classification.
// Classifies a file path as analyzable or not, based on its extension.
// The canonical extension list is loaded lazily from the providers layer
// so that the two layers never drift apart.
export async function isAnalyzable(filePath) {
  const dot = filePath.lastIndexOf('.');
  if (dot === -1) return false;
  const ext = filePath.slice(dot).toLowerCase();
  const { ANALYZABLE } = await import('../providers/extensions.mjs');
  return ANALYZABLE.includes(ext);
}
