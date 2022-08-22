/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import type { Theme } from "theme-ui";
import { ThemeProvider as ThemeProviderUI } from "theme-ui";

export const DefaultTheme: Theme = {
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

export default function ThemeProvider({
  children,
  theme = DefaultTheme,
}: ThemeProviderProps) {
  return <ThemeProviderUI theme={theme}>{children}</ThemeProviderUI>;
}
