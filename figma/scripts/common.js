/* eslint-disable prettier/prettier */

/* 
  An asynchronous version of the exec function
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { exec } = require('node:child_process');

function logToConsole(type, ...messages) {
  // eslint-disable-next-line no-undef
  console[type]?.(...messages);
}

function log(...messages) {
  logToConsole('log', ...messages);
}

function logErr(...messages) {
  logToConsole('error', ...messages);
}

async function asyncExec(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, output) => {
      if (err) {
        return reject(err);
      }

      resolve(output);
    });
  });
}

// eslint-disable-next-line no-undef
module.exports = {
  logToConsole,
  log,
  logErr,
  asyncExec,
};
