import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default ({ url }) => {
  const __filename = fileURLToPath(url);

  return {
    __filename,
    __dirname: dirname(__filename),
  };
};
