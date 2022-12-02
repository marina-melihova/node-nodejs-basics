import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const list = async () => {
  const sourceDir = path.join(__dirname, 'files');

  try {
    const files = await fsPromises.readdir(sourceDir);
    console.log(files);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
