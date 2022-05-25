import React from 'react';
import { ColorMode, ColorScheme, Theme } from '../../types';
import { COLOR_MODE } from '../../utils/constants';
import '../../styles/main.css';

export interface CustomThemeProviderProps {
  theme: Theme;
  mode?: ColorMode;
  children: React.ReactNode | React.ReactNode[];
}

type CustomContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  scheme: ColorScheme;
  mode: ColorMode;
  setMode: React.Dispatch<React.SetStateAction<ColorMode>>;
};

const ThemeContext = React.createContext<CustomContext>({
  theme: Theme.Country,
  setTheme: () => undefined,
  scheme: ColorMode.Light,
  mode: ColorMode.Auto,
  setMode: () => undefined,
});

const isClient = typeof window !== 'undefined';

const retrieveDefaultMode = (mode?: ColorMode) => {
  if (!isClient) return ColorMode.Auto;

  if (mode) {
    localStorage.setItem(COLOR_MODE, mode);

    return mode;
  }

  const savedMode = localStorage.getItem(COLOR_MODE) as null | ColorMode;

  if (!savedMode) {
    const fallbackMode = ColorMode.Auto;

    localStorage.setItem(COLOR_MODE, fallbackMode);

    return fallbackMode;
  }

  return savedMode;
};

export const CustomThemeProvider = ({
  theme: defaultTheme,
  mode: defaultMode,
  children,
}: CustomThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [scheme, setScheme] = React.useState<ColorScheme>(ColorMode.Light);
  const [mode, setMode] = React.useState<ColorMode>(
    retrieveDefaultMode(defaultMode)
  );

  const evalScheme = React.useCallback(() => {
    let resultingScheme = ColorMode.Light;

    if (mode === ColorMode.Auto) {
      const isDarkPreferred = !!window?.matchMedia?.(
        '(prefers-color-scheme: dark)'
      )?.matches;
      resultingScheme = isDarkPreferred ? ColorMode.Dark : ColorMode.Light;
    } else {
      resultingScheme = mode;
    }

    isClient && localStorage.setItem(COLOR_MODE, mode);
    setScheme(resultingScheme);
  }, [mode]);

  React.useEffect(() => {
    import(`../../../.storybook/themes/${theme}.css`);

    const colorModeMediaQuery = window?.matchMedia?.(
      '(prefers-color-scheme: dark)'
    );

    function colorModeChangeHandler(e: MediaQueryListEvent) {
      const isDarkSchemePreferred = e.matches;
      const newScheme = isDarkSchemePreferred
        ? ColorMode.Dark
        : ColorMode.Light;

      setScheme(newScheme);
    }

    colorModeMediaQuery?.addEventListener?.('change', colorModeChangeHandler);

    return () => {
      colorModeMediaQuery?.removeEventListener(
        'change',
        colorModeChangeHandler
      );
    };
  });

  React.useEffect(() => evalScheme(), [evalScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, scheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useCustomTheme() {
  return React.useContext(ThemeContext);
}

CustomThemeProvider.displayName = 'CustomThemeProvider';
