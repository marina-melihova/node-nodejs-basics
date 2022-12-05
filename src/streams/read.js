import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const read = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    const fd = await fsPromises.open(file);
    const readableStream = fd.createReadStream({ encoding: 'utf8' });
    readableStream.pipe(process.stdout);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await read();
