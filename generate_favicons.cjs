const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcLogo = path.join(process.cwd(), 'src', 'assets', 'logo', 'ChatGPT Image Mar 5, 2026, 01_53_39 PM.png');
const publicDir = path.join(process.cwd(), 'public');

// Helper to construct a multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  let offset = 6 + 16 * numImages;
  const dirEntries = [];
  for (const { buffer, width, height } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Image data offset
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function generateFavicons() {
  console.log('Generating Google-compliant favicons and assets...');

  // The emblem is centered at (768, 512). A 700x700 crop gives an optimal zoom on the logo.
  const cropConfig = { left: 418, top: 162, width: 700, height: 700 };

  // 1. Google 48x48 multiple requirements (48, 96, 192, 512)
  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'favicon.png', size: 192 }, // Primary 192x192 for modern browsers & Google
    { name: 'logo.png', size: 512 },
  ];

  for (const item of sizes) {
    await sharp(srcLogo)
      .extract(cropConfig)
      .resize(item.size, item.size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, item.name));
    console.log(`✓ ${item.name} (${item.size}x${item.size}) created`);
  }

  // 2. Apple Touch Icon (180x180)
  await sharp(srcLogo)
    .extract(cropConfig)
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png (180x180) created');

  // 3. Multi-layer favicon.ico (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const icoPngBuffers = [];
  for (const s of icoSizes) {
    const buf = await sharp(srcLogo)
      .extract(cropConfig)
      .resize(s, s)
      .png({ compressionLevel: 9 })
      .toBuffer();
    icoPngBuffers.push({ buffer: buf, width: s, height: s });
  }
  const icoBuffer = createIco(icoPngBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ favicon.ico (16, 32, 48 multi-resolution) created');

  // 4. og-image.jpg (1200x630 social/Google rich card preview)
  await sharp(srcLogo)
    .extract(cropConfig)
    .resize(500, 500)
    .extend({
      top: 65,
      bottom: 65,
      left: 350,
      right: 350,
      background: { r: 15, g: 23, b: 42 }
    })
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('✓ og-image.jpg (1200x630) created');

  // 5. site.webmanifest
  const manifest = {
    name: "Deepam Engineering Works",
    short_name: "DEW",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#0f172a",
    background_color: "#0f172a",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('✓ site.webmanifest created');

  // 6. robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Allow: /favicon.ico
Allow: /favicon.png
Allow: /favicon-48x48.png
Allow: /favicon-96x96.png
Allow: /favicon-192x192.png

Sitemap: https://www.deepamengineeringworks.com/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✓ robots.txt created');

  // 7. sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.deepamengineeringworks.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
  console.log('✓ sitemap.xml created');

  console.log('\nAll SEO and Favicon files successfully generated!');
}

generateFavicons().catch(console.error);
