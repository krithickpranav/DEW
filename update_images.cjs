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
            if (/<img[\s\n]/.test(content)) {
                if (!content.includes('loading="lazy"')) {
                    const newContent = content.replace(/<img([\s\n]+)/g, '<img loading="lazy" decoding="async"$1');
                    if (newContent !== content) {
                        fs.writeFileSync(filepath, newContent, 'utf8');
                        console.log('Updated', filepath);
                    }
                }
            }
        }
    }
}

walk(srcDir);
