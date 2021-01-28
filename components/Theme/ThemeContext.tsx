import * as React from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "dark";
};

export const ThemeContext = React.createContext<{
  theme?: string;
  setTheme?: (value: string) => void;
}>({});

export const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: string;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<string>(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    if (typeof window == "undefined") return;
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
