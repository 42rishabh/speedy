"use client";
import { useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Check } from "lucide-react";

const FooterStyle = () => {
  const { theme: mode } = useTheme();
  const {
    theme: config,
    setTheme: setConfig,
    footerType,
    setFooterType,
  } = useThemeStore();
  const newTheme = themes.find((theme) => theme.name === config);
  const handleChange = (event) => {
    setFooterType(event.target.value);
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
        Footer Type
      </div>
      <div className="flex flex-wrap items-center gap-3 m-3">
        {["sticky", "static", "hidden"].map((value, index) => (
          <label
            htmlFor={`nav-type-${index}`}
            key={`nav-type-${index}`}
            className="flex  items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              id={`nav-type-${index}`}
              value={value}
              checked={footerType === value}
              className="hidden"
              onChange={handleChange}
            />
            <div
              className={cn(
                "w-4 h-4 flex justify-center items-center rounded-full border border-default-400",
                {
                  "bg-primary": footerType === value,
                }
              )}
            >
              {footerType === value && (
                <Check className="h-3 w-3 text-primary-foreground" />
              )}
            </div>
            <span className="text-sm text-default-500 capitalize">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FooterStyle;
