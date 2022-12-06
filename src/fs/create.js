import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const create = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fresh.txt');
    await fsPromises.writeFile(file, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new AppError('FS operation failed');
  }
};

await create();
