/* eslint-disable prettier/prettier */
const FIGMA_SYNC_BRANCH = 'figma-tokens';
const ROOT_TOKEN_SET = 'global';
const BRAND_TOKEN_SETS = ['sme', 'country'];
const FIGMA_TOKENS_PATH = 'figma/tokens/';
const EXPORTED_FIGMA_TOKENS_PATH = `${FIGMA_TOKENS_PATH}exported.json`;
const TRANSFORMED_TOKENS_PATH = `${FIGMA_TOKENS_PATH}transformed/`;
const BRAND_BUILD_PATH = 'src/styles/brands/';
const PLATFORMS_CONFIG = [
  {
    type: 'css',
    format: 'css/variables',
    extension: 'css',
  },
  {
    type: 'js',
    format: 'javascript/es6',
    extension: 'ts',
  },
];

// eslint-disable-next-line no-undef
module.exports = {
  FIGMA_SYNC_BRANCH: FIGMA_SYNC_BRANCH,
  ROOT_TOKEN_SET: ROOT_TOKEN_SET,
  BRAND_TOKEN_SETS: BRAND_TOKEN_SETS,
  FIGMA_TOKENS_PATH: FIGMA_TOKENS_PATH,
  EXPORTED_FIGMA_TOKENS_PATH: EXPORTED_FIGMA_TOKENS_PATH,
  TRANSFORMED_TOKENS_PATH: TRANSFORMED_TOKENS_PATH,
  BRAND_BUILD_PATH: BRAND_BUILD_PATH,
  PLATFORMS_CONFIG: PLATFORMS_CONFIG,
};
