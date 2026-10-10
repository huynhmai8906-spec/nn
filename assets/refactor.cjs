const fs = require('fs');

let html = fs.readFileSync('../index.html', 'utf8');

html = html.replace(
  /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Be\+Vietnam\+Pro[^>]+>/,
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">'
);

html = html.replace(
  /fontFamily: \{\s*serif: \[.*?\],\s*sans: \[.*?\]\s*\}/s,
  `fontFamily: { serif: ["'Merriweather'", "Georgia", "serif"], sans: ["'Inter'", "system-ui", "sans-serif"] }`
);

html = html.replace(/font-family: 'Plus Jakarta Sans', sans-serif;/g, "font-family: 'Inter', sans-serif;");
html = html.replace(/font-family: 'Playfair Display', Georgia, serif;/g, "font-family: 'Merriweather', Georgia, serif;");
html = html.replace(/font-family: 'Be Vietnam Pro', 'Plus Jakarta Sans', system-ui, sans-serif;/g, "font-family: 'Inter', system-ui, sans-serif;");

const newDoctors = `, { id: 'doctor1', name: 'BS. CKI Le Quang Huy', role: 'Chuyen Khoa Tim Mach', price: '500.000d / phien', category: 'cardio', img: 'https://images.unsplash.com/photo-1612349317150-e4c194bb81cc?auto=format&fit=crop&q=80&w=800' }, { id: 'doctor2', name: 'BS. CKI Tran Thi Mai', role: 'Chuyen Khoa Than Kinh', price: '600.000d / phien', category: 'rehab', img: 'https://images.unsplash.com/photo-1559839734-2b71ea192732?auto=format&fit=crop&q=80&w=800' }, { id: 'doctor3', name: 'ThS. BS Pham Van Nam', role: 'Bac Si Tri Lieu', price: '550.000d / phien', category: 'psychiatry', img: 'https://images.unsplash.com/photo-1537368910025-7001b0e50f58?auto=format&fit=crop&q=80&w=800' }, { id: 'doctor4', name: 'BS. CKI Nguyen Quoc Hung', role: 'Phuc Hoi Chuc Nang', price: '700.000d / phien', category: 'rehab', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' } ];`;

html = html.replace(/\];\s*const reviewsDict/g, newDoctors + '\n        const reviewsDict');

const newNurses = `, { id: 101, name: 'DD. Le Thi Thanh', role: 'Dieu Duong Truong', specialty: 'icu', rating: 5.0, reviews: 120, img: 'https://images.unsplash.com/photo-1584982751601-e14660eb9179?auto=format&fit=crop&q=80&w=800' }, { id: 102, name: 'DD. Tran Van Khoa', role: 'Dieu Duong Cham Soc', specialty: 'rehab', rating: 4.8, reviews: 89, img: 'https://images.unsplash.com/photo-1551076805-e18690c50f15?auto=format&fit=crop&q=80&w=800' }, { id: 103, name: 'DD. Nguyen Thi Huong', role: 'Dieu Duong Cap Cuu', specialty: 'er', rating: 4.9, reviews: 210, img: 'https://images.unsplash.com/photo-1612349317150-e4c194bb81cc?auto=format&fit=crop&q=80&w=800' } ];`;

html = html.replace(/\];\s*const filteredNurses/g, newNurses + '\n        const filteredNurses');

const unsplashUrls = [
  'https://images.unsplash.com/photo-1581056771107-11a4b09a1a15?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551076805-e18690c50f15?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
];

html = html.replace(/\.\/assets\/images\/img_[^'"]+/g, (match) => {
  return unsplashUrls[Math.floor(Math.random() * unsplashUrls.length)];
});

fs.writeFileSync('../index.html', html, 'utf8');

const serverJs = `import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression'; // Assuming they might install it, but let's keep it simple

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', name: 'GoCare', timestamp: new Date().toISOString() });
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(\`GoCare server running on http://0.0.0.0:\${PORT}\`);
});
`;
fs.writeFileSync('../server.js', serverJs, 'utf8');

console.log('Successfully refactored!');