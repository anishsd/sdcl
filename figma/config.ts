import { Named, Transform } from 'style-dictionary';

export const FIGMA_SYNC_BRANCH = 'figma-tokens';
export const ROOT_TOKEN_SET = 'global';
export const FIGMA_TOKENS_PATH = 'figma/tokens/';
export const EXPORTED_FIGMA_TOKENS_PATH = `${FIGMA_TOKENS_PATH}exported.json`;
export const TRANSFORMED_TOKENS_PATH = `${FIGMA_TOKENS_PATH}transformed/`;
export const BRAND_BUILD_PATH = 'src/styles/brands/';
export const FONT_WEIGHT_MAP = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};
export const CUSTOM_TRANSFORM_NAMES = {
  shadowTransform: 'shadow',
  fontWeightTransform: 'font-weight',
}
export const CUSTOM_TRANSFORMS: Named<Transform>[] = [
  {
    name: CUSTOM_TRANSFORM_NAMES.shadowTransform,
    type: 'value',
    matcher: function (prop) {
      return prop?.type === 'boxShadow';
    },
    transformer: function (prop) {
      const { x, y, blur, spread, color } = prop.original.value;

      return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    },
  },
  {
    name: CUSTOM_TRANSFORM_NAMES.fontWeightTransform,
    type: 'value',
    matcher: function (prop) {
      return prop?.type === 'fontWeights';
    },
    transformer: function (prop) {
      const fontWeightLabel = prop.original.value as keyof typeof FONT_WEIGHT_MAP;
      const fontWeightValue = FONT_WEIGHT_MAP[fontWeightLabel];

      return fontWeightValue;
    },
  },
];
export const PLATFORMS_CONFIG = [
  {
    type: 'css',
    format: 'css/variables',
    extension: 'css',
    transforms: ['name/cti/kebab', CUSTOM_TRANSFORM_NAMES.shadowTransform, CUSTOM_TRANSFORM_NAMES.fontWeightTransform],
  },
  {
    type: 'js',
    format: 'javascript/es6',
    extension: 'ts',
    transforms: ['name/cti/camel', CUSTOM_TRANSFORM_NAMES.shadowTransform, CUSTOM_TRANSFORM_NAMES.fontWeightTransform],
  },
];
