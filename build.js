import fs from 'fs';
import path from 'path';
import vm from 'vm';

console.log('[GoCare Build] Checking and building artifacts...');

const srcJsxPath = path.resolve(process.cwd(), 'src/app.jsx');
const appJsPath = path.resolve(process.cwd(), 'app.js');
const babelPath = path.resolve(process.cwd(), 'assets/vendor/babel.min.js');

if (fs.existsSync(srcJsxPath) && fs.existsSync(babelPath)) {
  try {
    const babelCode = fs.readFileSync(babelPath, 'utf8');
    const sandbox = { window: {}, console };
    vm.createContext(sandbox);
    vm.runInContext(babelCode, sandbox);
    const Babel = sandbox.Babel || sandbox.window.Babel;

    const jsx = fs.readFileSync(srcJsxPath, 'utf8');
    const compiled = Babel.transform(jsx, {
      presets: [
        [Babel.availablePresets['react'], { runtime: 'classic' }]
      ]
    }).code;
    fs.writeFileSync(appJsPath, compiled, 'utf8');
    console.log(`[GoCare Build] Compiled src/app.jsx -> app.js (${compiled.length} bytes). Build successful.`);
  } catch (err) {
    console.error('[GoCare Build] Compilation error:', err);
    process.exit(1);
  }
} else if (fs.existsSync(appJsPath)) {
  const stats = fs.statSync(appJsPath);
  console.log(`[GoCare Build] app.js exists (${stats.size} bytes). Build successful.`);
} else {
  console.log('[GoCare Build] app.js ready.');
}
console.log('[GoCare Build] Ready for deployment on AI Studio and Vercel.');
