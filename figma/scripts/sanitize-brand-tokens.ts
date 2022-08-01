/* 
  Sanitize exported Figma tokens to 1 JSON token file per token set
*/

import { asyncExec } from './common';
import {
  EXPORTED_FIGMA_TOKENS_PATH,
  ROOT_TOKEN_SET,
  TRANSFORMED_TOKENS_PATH,
} from '../config';
import { BRAND_TOKEN_SETS } from '../../src/utils/constants';

export async function sanitizeTokens() {
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
