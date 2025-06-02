import { useCallback, useEffect, useState } from "react";
import { isDarkTheme } from "../utils/isDarkTheme";

const useThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(isDarkTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.theme = newTheme;
    setIsDark(!isDark);
  }, [isDark]);

  return { isDark, toggleTheme };
};
export default useThemeToggle;
