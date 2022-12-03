import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
  const file = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(file);
  process.stdin.pipe(writableStream);
};

await write();
