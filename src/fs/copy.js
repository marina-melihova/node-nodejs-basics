import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const copyDir = async (src, dest) => {
  const entries = await fsPromises.readdir(src, { withFileTypes: true });
  await fsPromises.mkdir(dest);
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsPromises.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  try {
    const source = path.join(__dirname, 'files');
    const destination = path.join(__dirname, 'files_copy');
    await copyDir(source, destination);
  } catch {
    throw new AppError('FS operation failed');
  }
};

copy();
