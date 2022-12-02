import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await create();
