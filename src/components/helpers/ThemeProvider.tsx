import { useTheme } from "@/hooks/useTheme";
import type { ReactNode } from "react";
import { useMount } from "react-use";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();

  useMount(() => {
    if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

  return <>{children}</>;
};

export default ThemeProvider;
