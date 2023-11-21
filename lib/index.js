// lib/index.js 文件

const fs = require('fs');
const { spawn } = require('child_process');
const os = require('os');

function concatParams(command, paramsFilePath) {
  const params = fs.readFileSync(paramsFilePath, 'utf-8').trim().split(os.EOL);

  // 去除每个参数中的可能存在的换行符
  const cleanedParams = params.map(param => param.trim());

  const concatenatedCommand = [command, ...cleanedParams];

  console.log(concatenatedCommand);

  const childProcess = spawn(concatenatedCommand.join(' '), { shell: true });

  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  childProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
}

module.exports = concatParams;
