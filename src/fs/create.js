import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const create = async () => {
  const file = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fsPromises.writeFile(file, 'I am fresh and young', { flag: 'wx' });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await create();
