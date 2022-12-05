import { promises as fsPromises } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const decompress = async () => {
  try {
    const archive = path.join(__dirname, 'files', 'archive.gz');
    const fdArchive = await fsPromises.open(archive, 'r');
    const readableStream = fdArchive.createReadStream(archive);
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fd = await fsPromises.open(file, 'w');
    const writeableStream = fd.createWriteStream();
    const gz = zlib.createUnzip();
    readableStream.pipe(gz).pipe(writeableStream);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await decompress();
