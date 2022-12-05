import { createHash } from 'crypto';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const sha256 = content => {
  return createHash('sha256').update(content).digest('hex');
};

const calculateHash = async () => {
  try {
    const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileBuffer = await fsPromises.readFile(file);
    console.log(sha256(fileBuffer));
  } catch {
    throw new AppError('FS operation failed');
  }
};

await calculateHash();
