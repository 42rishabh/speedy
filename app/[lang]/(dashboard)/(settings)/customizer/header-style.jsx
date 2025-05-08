import { useThemeStore, useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Check } from "lucide-react";

const HeaderStyle = () => {
  const { theme: mode } = useTheme();
  const {
    theme: config,
    setTheme: setConfig,
    navbarType,
    setNavbarType,
    layout,
  } = useThemeStore();
  const newTheme = themes.find((theme) => theme.name === config);
  const { sidebarType } = useSidebar();

  const handleChange = (event) => {
    setNavbarType(event.target.value);
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
        Navbar Type
      </div>
      <div className="flex flex-wrap items-center gap-3 m-2">
        {["sticky", "static", "floating", "hidden"].map((value, index) => {
          // Hide or disable the "floating" option if layout is "horizontal"
          if (layout === "horizontal" && value === "floating") {
            return null; // Skip rendering
          }

          return (
            <label
              htmlFor={value}
              key={`nav-type-${index}`}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id={value}
                value={value}
                checked={navbarType === value}
                className="hidden"
                onChange={handleChange}
              />
              <div
                className={cn(
                  "w-4 h-4 flex justify-center items-center rounded-full border border-default-400",
                  {
                    "bg-primary": navbarType === value,
                  }
                )}
              >
                {navbarType === value && (
                  <Check className="h-3 w-3 text-primary-foreground" />
                )}
              </div>
              <span className="text-sm text-default-500 capitalize">
                {value}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderStyle;
