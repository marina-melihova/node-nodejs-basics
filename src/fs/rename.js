import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const rename = async () => {
  try {
    const sourceDir = path.join(__dirname, 'files');
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const files = await fsPromises.readdir(sourceDir);
    if (files.includes(newFileName)) throw new Error();
    const oldFile = path.join(sourceDir, oldFileName);
    const newFile = path.join(sourceDir, newFileName);
    await fsPromises.rename(oldFile, newFile);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await rename();
