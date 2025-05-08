"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { themes } from "@/config/thems";
import { useThemeStore } from "@/store";
import { Check } from "lucide-react";

const allThemes = [
  { key: "light", label: "Light", icon: "heroicons:sun" },
  { key: "dark", label: "Dark", icon: "heroicons:moon" },
];

const SelectTheme = () => {
  const { theme, setTheme, resolvedTheme: mode } = useTheme();
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const newTheme = themes.find((theme) => theme.name === config);

  return (
    <div
      style={{
        "--theme-primary": `hsl(${
          newTheme?.cssVars[mode === "dark" ? "dark" : "light"].primary
        })`,
      }}
      className="mb-4"
    >
      <div className="text-xl font-bold text-primary rounded-md bg-primary-50 p-2">
        Color Scheme
      </div>
      <p className="text-muted-foreground text-sm m-2 mb-4">Choose Light or Dark Scheme.</p>

      <div className="flex gap-4">
        {allThemes?.map((themeOption) => (
          <div key={themeOption.key} className="w-fit">
            <button
              onClick={() => setTheme(themeOption.key)}
              className={cn(
                "border flex w-full text-center items-center justify-center py-[14px]  px-10 rounded relative",
                {
                  "text-[--theme-primary] border-[--theme-primary]":
                    theme === themeOption.key,
                  "text-default-400": theme !== themeOption.key,
                }
              )}
            >
              {theme === themeOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className=" text-[--theme-primary] absolute top-1 right-1"
                />
              )}
              <div>
                <Icon icon={themeOption.icon} className=" h-5 w-5" />
              </div>
            </button>
            <Label className=" text-muted-foreground font-normal block mt-2">
              {themeOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTheme;
