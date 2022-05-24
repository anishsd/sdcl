/* eslint-disable no-unused-vars */
export const enum Theme {
  Sme = 'sme',
  Country = 'country',
}

export const enum ColorMode {
  Light = 'light',
  Dark = 'dark',
  Auto = 'auto',
}

export type ColorScheme = ColorMode.Light | ColorMode.Dark;
