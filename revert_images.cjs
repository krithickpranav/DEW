const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walk(filepath);
        } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
            let content = fs.readFileSync(filepath, 'utf8');
            if (content.includes('loading="lazy" decoding="async"')) {
                const newContent = content.replace(/ loading="lazy" decoding="async"/g, '');
                if (newContent !== content) {
                    fs.writeFileSync(filepath, newContent, 'utf8');
                    console.log('Reverted', filepath);
                }
            }
        }
    }
}

walk(srcDir);
