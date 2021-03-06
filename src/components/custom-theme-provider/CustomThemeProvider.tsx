import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ColorMode, ColorScheme, Theme } from '../../types';
import { COLOR_MODE } from '../../utils/constants';
import '../../styles/main.css';

export interface CustomThemeProviderProps {
  theme: Theme;
  mode?: ColorMode;
  children: ReactNode | ReactNode[];
}

type CustomContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  scheme: ColorScheme;
  mode: ColorMode;
  setMode: Dispatch<SetStateAction<ColorMode>>;
};

const ThemeContext = createContext<CustomContext>({
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
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [scheme, setScheme] = useState<ColorScheme>(ColorMode.Light);
  const [mode, setMode] = useState<ColorMode>(retrieveDefaultMode(defaultMode));

  const evalScheme = useCallback(() => {
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

  useEffect(() => {
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

  useEffect(() => evalScheme(), [evalScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, scheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useCustomTheme() {
  return useContext(ThemeContext);
}

CustomThemeProvider.displayName = 'CustomThemeProvider';
