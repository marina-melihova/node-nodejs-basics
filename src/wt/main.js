import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import esmPath from '../utils/esmPath.js';

const { __dirname } = esmPath(import.meta);

const startNum = 10;

function createWorker(num) {
  return new Promise(resolve => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: num });
    worker.on('message', data => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
    worker.on('exit', code => {
      if (code !== 0) resolve(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

const performCalculations = async () => {
  try {
    const results = cpus().map((el, idx) => createWorker(startNum + idx));
    console.log(await Promise.all(results));
  } catch (error) {
    console.log(error);
  }
};

await performCalculations();
