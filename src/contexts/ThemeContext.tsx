import { createContext } from 'react';

export const themes = {
    dark: 'dark',
    light: 'light',
};

type ThemeType = {
    theme: string;
    setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeType>({
    theme: themes.light,
    setTheme: () => {},
});