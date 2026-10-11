const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const startTag = '<script type="text/babel" data-presets="react,env">';
const startIdx = html.indexOf(startTag);
const endIdx = html.lastIndexOf('</script>');

if (startIdx === -1 || endIdx === -1) {
  console.log('Script tag not found!');
  process.exit(1);
}

const code = html.substring(startIdx + startTag.length, endIdx);
console.log('Extracted code length:', code.length);

// Check matching brackets, braces, parentheses
let braces = 0, parens = 0, brackets = 0;
let lines = code.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let ch of line) {
    if (ch === '{') braces++;
    else if (ch === '}') braces--;
    else if (ch === '(') parens++;
    else if (ch === ')') parens--;
    else if (ch === '[') brackets++;
    else if (ch === ']') brackets--;
  }
}

console.log('Braces balance:', braces);
console.log('Parens balance:', parens);
console.log('Brackets balance:', brackets);

