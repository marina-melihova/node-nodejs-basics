const parseArgs = () => {
  const output = [];
  for (let i = 2; i < process.argv.length; i += 2) {
    output.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
  }
  console.log(output.join(', '));
};

parseArgs();
