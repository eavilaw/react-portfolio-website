// Utility to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path) => {
  // In development, use the path as is
  if (import.meta.env.DEV) {
    return path;
  }
  
  // In production (GitHub Pages), prepend the base path
  const base = '/react-portfolio-website';
  return `${base}${path}`;
};