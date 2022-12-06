import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const read = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    const data = await fsPromises.readFile(file, 'utf-8');
    console.log(data);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await read();
