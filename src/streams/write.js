import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const write = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fileToWrite.txt');
    const fd = await fsPromises.open(file, 'w');
    const writableStream = fd.createWriteStream();
    process.stdin.pipe(writableStream);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await write();
