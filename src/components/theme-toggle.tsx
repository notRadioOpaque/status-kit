"use client";

import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {Icon} from "@iconify/react";

export default function ThemeToggle() {
  const {systemTheme, theme, setTheme} = useTheme();
  const [isClient, setIsClient] = useState(false);
  const activeTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      aria-label="Toggle Theme"
      className={`dark:bg-primary-bg dark:text-primary-color group: cursor-pointer rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-500 transition-transform duration-300 dark:border-zinc-900 dark:bg-[#3a3a3a] ${
        activeTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      onClick={toggleTheme}
    >
      {activeTheme === "light" ? (
        <Icon height="24" icon="mage:sun" width="24" />
      ) : (
        <Icon height="24" icon="icons8:moon" width="24" />
      )}
    </button>
  );
}
