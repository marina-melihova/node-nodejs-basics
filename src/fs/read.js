import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const read = async () => {
  const file = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await fsPromises.readFile(file, 'utf-8');
    console.log(data);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
