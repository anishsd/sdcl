/* eslint-disable prettier/prettier */

/* 
  Convert already sanitized Figma token sets to css & ts files
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const StyleDictionary = require('style-dictionary');
const {
  BRAND_BUILD_PATH,
  TRANSFORMED_TOKENS_PATH,
  ROOT_TOKEN_SET,
  BRAND_TOKEN_SETS,
  PLATFORMS_CONFIG,
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
} = require('../config.js');

const autoGeneratedFileHeader = () => [
  'Do not edit directly, this file was auto-generated.',
];

function retrievePlatform(brand, config) {
  return {
    [config.type]: {
      transformGroup: config.type,
      buildPath: `${BRAND_BUILD_PATH}${brand}/`,
      files: [
        {
          destination: `index.${config.extension}`,
          format: config.format,
          outputReferences: true,
          options: { fileHeader: 'autoGeneratedFileHeader' },
        },
      ],
    },
  };
}

function getStyleDictionaryConfig(brand, platformConfig) {
  return {
    source: [
      `${TRANSFORMED_TOKENS_PATH}${ROOT_TOKEN_SET}.json`,
      `${TRANSFORMED_TOKENS_PATH}${brand}.json`,
    ],
    fileHeader: { autoGeneratedFileHeader },
    platforms: retrievePlatform(brand, platformConfig),
  };
}

function buildToken(tokenSet, platformConfig) {
  const platform = platformConfig.type;
  const config = getStyleDictionaryConfig(tokenSet, platformConfig);
  const configuredStyleDictionary = StyleDictionary.extend(config);

  configuredStyleDictionary.buildPlatform(platform);
}

function buildTokens() {
  BRAND_TOKEN_SETS.map((tokenSet) => {
    PLATFORMS_CONFIG.map((platformConfig) => {
      buildToken(tokenSet, platformConfig);
    });
  });
}

// eslint-disable-next-line no-undef
module.exports = {
  buildTokens,
};
