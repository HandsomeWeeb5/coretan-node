const { readFileSync, writeFileSync } = require('fs');

const text1 = readFileSync('./content/text1.txt', 'utf-8');
const text2 = readFileSync('./content/text2.txt', 'utf-8');

// console.log(text1 + ", " + text2);
writeFileSync(
    './content/hasil-sync.txt',
    `Ini hasil penggabungan text: ${text1} dan ${text2}`, {flag: 'a'}
)