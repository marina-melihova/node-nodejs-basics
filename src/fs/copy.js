import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const copy = async () => {
  try {
    const source = path.join(__dirname, 'files');
    const destination = path.join(__dirname, 'files_copy');
    await fsPromises.cp(source, destination, { errorOnExist: true, force: false, recursive: true });
  } catch {
    throw new AppError('FS operation failed');
  }
};

copy();
