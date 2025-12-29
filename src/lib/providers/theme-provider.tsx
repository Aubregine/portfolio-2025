import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeService {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeService | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) ?? defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;
    // remove the default theme class
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]); // everytime theme changes, run the effect

  const value = {
    theme,
    // when a component calls this, it will update the theme
    // and trigger the effect
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
