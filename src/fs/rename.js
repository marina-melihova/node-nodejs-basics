import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const { promises: fsPromises } = fs;

const rename = async () => {
  const sourceDir = path.join(__dirname, 'files');
  const files = await fsPromises.readdir(sourceDir);
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';

  if (files.includes(oldFileName) || !files.includes(newFileName)) {
    throw new Error('FS operation failed');
  }

  const oldFilePath = path.join(filesDir, fileOldName);
  const newFilePath = path.join(filesDir, fileNewName);
  await fs.rename(oldFilePath, newFilePath);
};

await rename();
