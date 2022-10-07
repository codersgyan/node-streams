const fs = require('fs');

// const writableStream = fs.createWriteStream('log.txt');
const readableSteam = fs.createReadStream('log.txt');

readableSteam.pipe(process.stdout)


