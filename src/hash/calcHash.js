import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const sha256 = content => {
  return createHash('sha256').update(content).digest('hex');
};

const calculateHash = async () => {
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const fileBuffer = await fsPromises.readFile(file);
  console.log(sha256(fileBuffer));
};

await calculateHash();
