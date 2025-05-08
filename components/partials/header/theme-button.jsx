"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@/components/svg";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative md:h-9 md:w-9 h-8 w-8 hover:bg-default-100 dark:hover:bg-default-200 
        hover:text-primary text-default-500 dark:text-default-800 rounded-full transition-colors"
    >
      {/* Show icon based on current theme */}
      <Sun className="h-5 w-5 transition-all dark:hidden" />
      <Moon className="h-5 w-5 transition-all hidden dark:block" />
    </Button>
  );
};

export default ThemeButton;