import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
  const source = path.join(__dirname, 'files', 'fileToCompress.txt');
  const archive = path.join(__dirname, 'files', 'archive.gz');
  const readableStream = fs.createReadStream(source);
  const writeableStream = fs.createWriteStream(archive);
  const gz = zlib.createGzip();
  readableStream.pipe(gz).pipe(writeableStream);
};

await compress();
