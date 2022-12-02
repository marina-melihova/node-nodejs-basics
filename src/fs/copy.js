import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const copy = async () => {
  const source = path.join(__dirname, 'files');
  const destination = path.join(__dirname, 'files_copy');

  try {
    await fsPromises.cp(source, destination, { errorOnExist: true, force: false, recursive: true });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

copy();
