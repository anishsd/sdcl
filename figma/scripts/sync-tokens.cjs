/* eslint-disable prettier/prettier */

/* 
  Synchronize tokens from Figma to codebase
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { sanitizeTokens } = require('./sanitize-brand-tokens.js');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { buildTokens } = require('./generate-development-tokens.js');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { log, logErr, asyncExec } = require('./common.js');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { FIGMA_SYNC_BRANCH } = require('../config.js');

const commentStartSeparator = '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~';
const commentEndSeparator = '=============================================';

function checkCurrentGitBranchStatus() {
  return new Promise((resolve, reject) => {
    asyncExec('git status --porcelain')
      .then((gitStatus) => {
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
          .then(() => resolve())
          .catch((e) => reject(e))
      )
      .catch((e) => reject(e));
  });
}

function lintCode() {
  return new Promise((resolve, reject) => {
    const lintCommand = 'npm run format';

    asyncExec(lintCommand)
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}

function stageAndCommitCode() {
  return new Promise((resolve, reject) => {
    const stageAndCommitCommand = `git add . && git commit -m "[${FIGMA_SYNC_BRANCH}] Synced figma tokens"`;

    asyncExec(stageAndCommitCommand)
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}

function pushCode() {
  return new Promise((resolve, reject) => {
    const lintCommand = 'git';

    asyncExec(lintCommand)
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}

function preSync() {
  return new Promise((resolve, reject) => {
    checkCurrentGitBranchStatus()
      .then(() =>
        refreshGitSyncBranch()
          .then(() => resolve())
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
          .then(() => pushCode().finally(() => resolve()))
          .catch((e) => reject(e))
      )
      .catch((e) => reject(e));
  });
}

async function sync() {
  try {
    await preSync();

    log(
      '\n' +
        commentStartSeparator +
        '\n' +
        'Token Transformer: Process started...' +
        '\n' +
        commentStartSeparator +
        '\n'
    );

    const sanitizeTokensLogs = await sanitizeTokens();

    log(
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

    buildTokens();

    await postSync();

    log(
      '\n' +
        commentEndSeparator +
        '\n' +
        'Style Dictionary: Build completed!' +
        '\n' +
        commentEndSeparator
    );
  } catch (err) {
    logErr('Error :>> ', err);
  }
}

sync();