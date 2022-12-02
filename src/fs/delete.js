import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const remove = async () => {
  const file = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fsPromises.rm(file);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
