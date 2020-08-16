const fs = require('fs');

const payloadContent = fs
  .readFileSync('./payload.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let result = [];
for (let name of payloadContent) {
  result.push({
    name,
    category: 'Matière grasse',
  });
}

fs.writeFileSync('./result.txt', JSON.stringify(result));
