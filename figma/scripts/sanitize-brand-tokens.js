/* eslint-disable prettier/prettier */

/* 
  Sanitize exported Figma tokens to 1 JSON token file per token set
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { asyncExec } = require('./common.js');
const {
  BRAND_TOKEN_SETS,
  EXPORTED_FIGMA_TOKENS_PATH,
  ROOT_TOKEN_SET,
  TRANSFORMED_TOKENS_PATH,
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
} = require('../config.js');

async function sanitizeTokens() {
  const tokenSets = [ROOT_TOKEN_SET, ...BRAND_TOKEN_SETS];

  return new Promise((resolve, reject) => {
    Promise.all(
      tokenSets.map((tokenSet) => {
        const outputFilePath = `${TRANSFORMED_TOKENS_PATH}${tokenSet}.json`;
        const sanitizeCommand = `npx token-transformer ${EXPORTED_FIGMA_TOKENS_PATH} ${outputFilePath} ${tokenSet}`;

        return asyncExec(sanitizeCommand);
      })
    )
      .then((output) => {
        const strOutput = output.join('');
        resolve(strOutput);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// eslint-disable-next-line no-undef
module.exports = {
  sanitizeTokens,
};
