module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/builder-webpack5',
    '@storybook/manager-webpack5',
    'storybook-css-modules-preset',
    '@storybook/addon-a11y',
    '@etchteam/storybook-addon-css-variables-theme',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
