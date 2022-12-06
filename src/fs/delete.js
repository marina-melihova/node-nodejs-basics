import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const remove = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fileToRemove.txt');
    await fsPromises.rm(file);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await remove();
