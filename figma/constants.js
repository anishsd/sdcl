/* eslint-disable prettier/prettier */
const ROOT_TOKEN_SET = 'global';
const BRAND_TOKEN_SETS = ['sme', 'country'];
const TRANSFORMED_TOKENS_PATH = 'figma/tokens/transformed/';
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
  ROOT_TOKEN_SET: ROOT_TOKEN_SET,
  BRAND_TOKEN_SETS: BRAND_TOKEN_SETS,
  TRANSFORMED_TOKENS_PATH: TRANSFORMED_TOKENS_PATH,
  BRAND_BUILD_PATH: BRAND_BUILD_PATH,
  PLATFORMS_CONFIG: PLATFORMS_CONFIG,
};
