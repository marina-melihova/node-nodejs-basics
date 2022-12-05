import { promises as fsPromises } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { AppError, esmPath } from '../utils/index.js';

const { __dirname } = esmPath(import.meta);

const compress = async () => {
  try {
    const source = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fdSource = await fsPromises.open(source, 'r');
    const readableStream = fdSource.createReadStream();
    const archive = path.join(__dirname, 'files', 'archive.gz');
    const fdArchive = await fsPromises.open(archive, 'w');
    const writeableStream = fdArchive.createWriteStream();
    const gz = zlib.createGzip();
    readableStream.pipe(gz).pipe(writeableStream);
  } catch {
    throw new AppError('FS operation failed');
  }
};

await compress();
