import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const list = async () => {
  try {
    const sourceDir = path.join(__dirname, 'files');
    const files = await fsPromises.readdir(sourceDir);
    console.log(files);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await list();
