import { useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import React from "react";
import { themes } from "@/config/thems";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeChange = () => {
  const { theme, setTheme } = useThemeStore();
  const { resolvedTheme: mode } = useTheme();
  const newTheme = themes.find((t) => t.name === theme);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

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
        Theme
      </div>
      <p className="text-muted-foreground text-sm m-2 mb-4">Choose a Theme</p>

      <div className=" flex flex-wrap ">
        {[
          "zinc",
          "slate",
          "stone",
          "gray",
          "neutral",
          "red",
          "rose",
          "orange",
          "blue",
          "yellow",
          "violet",
        ].map((value) => {
          const themeObj = themes.find((theme) => theme.name === value);
          const isActive = theme === value; // Compare theme.name with value
          return (
            <TooltipProvider key={value}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label>
                    <input
                      type="radio"
                      className="hidden"
                      value={value}
                      checked={theme === value} // Compare theme with value
                      onChange={handleThemeChange}
                    />
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs",
                        isActive
                          ? "border-[--theme-primary]"
                          : "border-transparent"
                      )}
                      style={{
                        "--theme-primary": `hsl(${
                          themeObj?.activeColor[
                            mode === "dark" ? "dark" : "light"
                          ]
                        })`,
                      }}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full bg-[--theme-primary]"
                        )}
                      >
                        {isActive && (
                          <Check className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </label>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  className="rounded-[0.5rem] bg-zinc-900 text-zinc-50  capitalize"
                >
                  {value}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeChange;
