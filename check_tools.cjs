const fs = require('fs');
const path = require('path');

// Read the large PNG
const srcLogo = path.join(process.cwd(), 'public', 'favicon.png');
const srcStat = fs.statSync(srcLogo);

console.log('Logo file size:', (srcStat.size / 1024 / 1024).toFixed(2), 'MB');

// The logo is 2.7MB - Google won't use it as favicon
// Let's check if we can use sharp to resize it
// First try using the Jimp package or similar that might already be installed
const { execSync } = require('child_process');

try {
  // Check if sharp is available
  require('sharp');
  console.log('sharp available!');
} catch(e) {
  console.log('sharp not available, checking magick...');
  try {
    execSync('magick --version', { stdio: 'pipe' });
    console.log('ImageMagick available!');
  } catch(e2) {
    console.log('ImageMagick not available');
  }
}

// List what's in node_modules that could help
const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
const imagePackages = nodeModules.filter(m => ['sharp', 'jimp', 'canvas', 'pngjs'].includes(m));
console.log('Available image packages:', imagePackages);
