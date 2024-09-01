import { useEffect, useState } from "react";
export type Mode = "dark" | "light";

const useTheme = () => {
  const [mode, setMode] = useState<Mode>("light");
  const currentMode = localStorage.getItem("mode");

  const toggleMode = (mode: Mode) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("mode");
    }
    setMode(mode);
  };

  useEffect(() => {
    if (currentMode === "dark") {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return { mode, toggleMode };
};

export default useTheme;
