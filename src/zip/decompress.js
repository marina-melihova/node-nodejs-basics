import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
  const file = path.join(__dirname, 'files', 'fileToCompress.txt');
  const archive = path.join(__dirname, 'files', 'archive.gz');
  const readableStream = fs.createReadStream(archive);
  const writeableStream = fs.createWriteStream(file);
  const gz = zlib.createUnzip();
  readableStream.pipe(gz).pipe(writeableStream);
};

await decompress();
