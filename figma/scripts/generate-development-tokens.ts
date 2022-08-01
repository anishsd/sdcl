/* 
  Convert already sanitized Figma token sets to css & ts files
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

import StyleDictionary from 'style-dictionary';
import {
  BRAND_BUILD_PATH,
  TRANSFORMED_TOKENS_PATH,
  ROOT_TOKEN_SET,
  PLATFORMS_CONFIG,
  CUSTOM_TRANSFORMS,
} from '../config';
import { BRAND_TOKEN_SETS } from '../../src/utils/constants';

const autoGeneratedFileHeader = () => [
  'Do not edit directly, this file was auto-generated.',
];

function retrievePlatform(brand: string, config: any) {
  return {
    [config.type]: {
      transformGroup: config.type,
      transforms: config.transforms,
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

function getStyleDictionaryConfig(brand: string, platformConfig: any) {
  return {
    source: [
      `${TRANSFORMED_TOKENS_PATH}${ROOT_TOKEN_SET}.json`,
      `${TRANSFORMED_TOKENS_PATH}${brand}.json`,
    ],
    fileHeader: { autoGeneratedFileHeader },
    platforms: retrievePlatform(brand, platformConfig),
  };
}

function buildToken(tokenSet: string, platformConfig: any) {
  const platform = platformConfig.type;
  const config = getStyleDictionaryConfig(tokenSet, platformConfig);
  const configuredStyleDictionary = StyleDictionary.extend(config);

  configuredStyleDictionary.buildPlatform(platform);
}

export function registerCustomTransforms() {
  CUSTOM_TRANSFORMS.map((transform) =>
    StyleDictionary.registerTransform(transform)
  );
}

export function buildTokens() {
  BRAND_TOKEN_SETS.map((tokenSet) => {
    PLATFORMS_CONFIG.map((platformConfig) => {
      buildToken(tokenSet, platformConfig);
    });
  });
}