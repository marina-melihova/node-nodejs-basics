import cp from 'child_process';
import path from 'path';
import esmPath from '../utils/esmPath.js';

const { __dirname } = esmPath(import.meta);

const spawnChildProcess = async args => {
  const script = path.join(__dirname, 'files', 'script.js');
  cp.fork(script, args);
};

const arg2 = 188;

spawnChildProcess(['someArgument1', arg2, 'testing']);
