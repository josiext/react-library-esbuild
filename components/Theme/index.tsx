/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import type { Theme } from "theme-ui";
import { ThemeProvider as ThemeProviderUI } from "theme-ui";

export const defaultTheme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: Theme;
}

export function ThemeProvider({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) {
  return <ThemeProviderUI theme={theme}>{children}</ThemeProviderUI>;
}
