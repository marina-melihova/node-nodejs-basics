import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const file = path.join(__dirname, 'files', 'fileToRead.txt');
  const readable = fs.createReadStream(file, { encoding: 'utf8' });
  readable.pipe(process.stdout);
};

await read();
