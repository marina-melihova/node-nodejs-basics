import { Transform } from 'stream';

const transform = async () => {
  console.log('To terminate it, use Ctrl+C combination\n');
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedData = chunk.toString().split('').reverse().join('');
      this.push(`${reversedData} \n\n`);
      callback();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
