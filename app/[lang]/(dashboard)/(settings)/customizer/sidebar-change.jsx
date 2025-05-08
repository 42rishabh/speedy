import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSidebar, useThemeStore } from "@/store";
import { themes } from "@/config/thems";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { VerticalSvg, HorizontalSvg, SemiBoxSvg } from "@/components/svg";
import { Icon } from "@iconify/react";
const sidebarOptions = [
  {
    key: "module",
    label: "Module",
    disabled: (layout) => layout === "semibox" || layout === "horizontal",
    svg: (
      <VerticalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "classic",
    label: "Classic",
    disabled: (layout) => layout === "semibox",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "popover",
    label: "Popover",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
];

const SidebarChange = () => {
  const { sidebarType, setSidebarType } = useSidebar();

  const { theme, setTheme, resolvedTheme: mode } = useTheme();
  const { theme: config, setTheme: setConfig, layout } = useThemeStore();
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
        Sidebar Layout
      </div>
      <p className="text-muted-foreground text-sm m-2 mb-4">Choose your layout</p>

      <div className="flex gap-4">
        {sidebarOptions.map((sidebarOption) => (
          <div key={sidebarOption.key} className="flex flex-col w-1/5 items-center">
            <button
              onClick={() => setSidebarType(sidebarOption.key)}
              disabled={
                sidebarOption.disabled && sidebarOption.disabled(layout)
              }
              className={cn(
                "border block rounded-xl relative w-full overflow-hidden bg-background flex items-center justify-center disabled:cursor-not-allowed",
                {
                  "text-[--theme-primary] border-[--theme-primary]":
                    sidebarType === sidebarOption.key,
                  "text-muted-foreground border-border":
                    sidebarType !== sidebarOption.key,
                }
              )}
            >
              {sidebarType === sidebarOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className=" text-[--theme-primary] absolute top-1 right-1"
                />
              )}
              <div className="w-full h-full flex items-center justify-center p-2">
                {sidebarOption.svg}
              </div>
            </button>

            <Label className="mt-2 text-m">
              {sidebarOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarChange;
