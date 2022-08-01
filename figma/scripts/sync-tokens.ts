/* 
  Synchronize tokens from Figma to codebase
*/

import { sanitizeTokens } from './sanitize-brand-tokens';
import {
  buildTokens,
  registerCustomTransforms,
} from './generate-development-tokens';
import { asyncExec } from './common';
import { FIGMA_SYNC_BRANCH } from '../config';

const commentStartSeparator =
  '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~';
const commentEndSeparator =
  '=====================================================';

function checkCurrentGitBranchStatus() {
  return new Promise((resolve, reject) => {
    asyncExec('git status --porcelain')
      .then((gitStatus: any) => {
        const gitStatusCharCount = gitStatus?.length;

        if (!Number.isInteger(gitStatusCharCount)) {
          reject('An error occurred while checking git status.');
        }

        const isBranchDirty = gitStatusCharCount > 0;

        if (isBranchDirty) {
          reject('Please commit all your files before running this script.');
        }

        resolve(isBranchDirty);
      })
      .catch((e) => reject(e));
  });
}

function refreshGitSyncBranch() {
  return new Promise((resolve, reject) => {
    const fetchCommand = 'git fetch';
    const checkoutCommand = `git checkout ${FIGMA_SYNC_BRANCH}`;
    const pullCommand = 'git pull';

    asyncExec(fetchCommand)
      .then(() =>
        asyncExec(checkoutCommand)
          .then(() => asyncExec(pullCommand))
          .catch((e) => reject(e))
          .then(() => resolve(true))
          .catch((e) => reject(e))
      )
      .catch((e) => reject(e));
  });
}

function lintCode() {
  return new Promise((resolve, reject) => {
    const lintCommand = 'npm run format';

    asyncExec(lintCommand)
      .then(() => resolve(true))
      .catch((e) => reject(e));
  });
}

function stageAndCommitCode() {
  return new Promise((resolve, reject) => {
    const stageCommand = 'git add .';
    const commitCommand = `git commit -m "[${FIGMA_SYNC_BRANCH}] Synced figma tokens"`;

    asyncExec(stageCommand)
      .then(() =>
        asyncExec(commitCommand)
          .then(() =>
            resolve(
              'Figma tokens have been synced. You may now push your code to the remote git branch.'
            )
          )
          .catch(() =>
            resolve(
              'Nothing to commit. Figma tokens are probably already in sync. It might also be an error. Please check the above logs for more information.'
            )
          )
      )
      .catch((e) => reject(e));
  });
}

function preSync() {
  return new Promise((resolve, reject) => {
    checkCurrentGitBranchStatus()
      .then(() =>
        refreshGitSyncBranch()
          .then(() => resolve(true))
          .catch((e) => reject(e))
      )
      .catch((e) => reject(e));
  });
}

function postSync() {
  return new Promise((resolve, reject) => {
    lintCode()
      .then(() =>
        stageAndCommitCode()
          .then((resp) => resolve(resp))
          .catch((e) => reject(e))
      )
      .catch((e) => reject(e));
  });
}

async function sync() {
  try {
    await preSync();

    console.log(
      '\n' +
        commentStartSeparator +
        '\n' +
        'Token Transformer: Process started...' +
        '\n' +
        commentStartSeparator +
        '\n'
    );

    const sanitizeTokensLogs = await sanitizeTokens();

    console.log(
      sanitizeTokensLogs +
        '\n' +
        commentEndSeparator +
        '\n' +
        'Token Transformer: Process completed!' +
        '\n' +
        commentEndSeparator +
        '\n\n' +
        commentStartSeparator +
        '\n' +
        'Style Dictionary: Build started...' +
        '\n' +
        commentStartSeparator
    );

    registerCustomTransforms();

    buildTokens();

    const finalMessage = await postSync();

    console.log(
      '\n' +
        commentEndSeparator +
        '\n' +
        'Style Dictionary: Build completed!' +
        '\n\n' +
        finalMessage +
        '\n' +
        commentEndSeparator
    );
  } catch (err) {
    console.error('Error :>> ', err);
  }
}

sync();
