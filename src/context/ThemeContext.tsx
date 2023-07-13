"use client";

import { createContext, ReactNode, useState } from "react";
type Theme = "light" | "dark";
interface ThemContextProps {
  theme: Theme;
  setTheme: (them: Theme) => void;
  toggle: () => void;
}
export const ThemeContext = createContext<ThemContextProps>({
  theme: "light",
  setTheme: () => {},
  toggle: () => {},
});
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const value: ThemContextProps = {
    theme,
    setTheme,
    toggle,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
