/* eslint-disable no-unused-vars */
export enum Theme {
  Sme = 'sme',
  Country = 'country',
}

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
  Auto = 'auto',
}

export type ColorScheme = ColorMode.Light | ColorMode.Dark;
