import SME from '!!style-loader?injectType=lazyStyleTag!css-loader!./themes/sme.css';
import Country from '!!style-loader?injectType=lazyStyleTag!css-loader!./themes/country.css';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: 'var(--clr-white)',
      },
      {
        name: 'Dark',
        value: 'var(--clr-tuna-gray)',
      },
    ],
  },
  cssVariables: {
    files: {
      SME,
      Country,
    },
  },
};

export const decorators = [cssVariablesTheme];
