"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { themes } from "@/config/thems";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { VerticalSvg, HorizontalSvg, SemiBoxSvg } from "@/components/svg";
import { Icon } from "@iconify/react";

const layoutOptions = [
  {
    key: "vertical",
    label: "Vertical",
    svg: (
      <VerticalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "horizontal",
    label: "Horizontal",
    svg: (
      <HorizontalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "semibox",
    label: "Semi-Box",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
];

const SelectLayout = () => {
  const { layout, setLayout } = useThemeStore();
  const { theme, resolvedTheme: mode } = useTheme();
  const { theme: config } = useThemeStore();

  const newTheme = themes.find((theme) => theme.name === config);
  const themePrimary = `hsl(${
    newTheme?.cssVars[mode === "dark" ? "dark" : "light"].primary
  })`;

  return (
    <div style={{ "--theme-primary": themePrimary }} className="mb-4">
      <div className="text-xl font-bold text-primary rounded-md bg-primary-50 p-2">
        Layout
      </div>
      <p className="text-muted-foreground text-sm m-2 mb-4">Choose your layout</p>

      <div className="flex gap-4">
        {layoutOptions.map((option) => {
          const isActive = layout === option.key;
          return (
            <div key={option.key} className="flex flex-col w-1/5 items-center">
              <button
                onClick={() => setLayout(option.key)}
                className={cn(
                  "border rounded-xl relative w-full h-full overflow-hidden bg-background flex items-center justify-center",
                  {
                    "text-[--theme-primary] border-[--theme-primary]": isActive,
                    "text-muted-foreground border-border": !isActive,
                  }
                )}
              >
                {isActive && (
                  <Icon
                    icon="heroicons:check-circle-20-solid"
                    className="absolute top-1 right-1 text-[--theme-primary] w-6 h-6"
                  />
                )}
                <div className="w-full h-full flex items-center justify-center p-2">
                  {option.svg}
                </div>
              </button>
              <Label className="mt-2 text-m">
                {option.label}
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectLayout;