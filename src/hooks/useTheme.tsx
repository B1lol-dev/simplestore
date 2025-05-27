import { useState } from "react";
import { useLocalStorage } from "react-use";

type TTheme = "light" | "dark";

export const useTheme = (initialTheme: TTheme = "light") => {
  const [currentTheme, setCurrentTheme] = useState<TTheme>(initialTheme);
  const [localTheme, setLocalTheme] = useLocalStorage("theme", currentTheme);

  const setTheme = (newTheme: TTheme) => {
    if (newTheme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      setCurrentTheme("dark");
      setLocalTheme("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      setCurrentTheme("light");
      setLocalTheme("light");
    }
  };

  const toggleTheme = () => {
    if (localTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return { theme: localTheme, setTheme, toggleTheme };
};
