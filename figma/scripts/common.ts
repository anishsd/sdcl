/* 
  An asynchronous version of the exec function
*/

import { exec } from 'node:child_process';

export async function asyncExec(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (err, output) => {
      if (err) {
        return reject(err);
      }

      resolve(output);
    });
  });
}
