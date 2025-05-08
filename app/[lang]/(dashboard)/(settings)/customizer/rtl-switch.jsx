"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

import { useThemeStore } from "@/store";
import { useRouter, usePathname } from "next/navigation";

const RtlSwitcher = () => {
  const router = useRouter();
  const { isRtl, setRtl } = useThemeStore();
  const pathname = usePathname();

  const handleDirectionChange = (rtl) => {
    const lang = rtl ? "ar" : "en";
    setRtl(rtl);
    router.push(`/${lang}/${pathname.split("/")[2]}`);
  };

  return (
    <div>
      <div className="text-xl font-bold text-primary rounded-md bg-primary-50 p-2">
        Direction
      </div>
      <p className="text-muted-foreground text-sm m-2 mb-4">Choose your direction</p>

      <div className="flex gap-4 w-full mb-4">
        <button
          className={cn(
            "border w-fit flex text-center text-default-400 items-center justify-center py-[14px] px-10 rounded",
            {
              "text-primary border-primary": !isRtl,
            }
          )}
          onClick={() => handleDirectionChange(false)}
        >
          Ltr
        </button>
        <button
          className={cn(
            "border flex w-fit text-center items-center justify-center py-[14px] px-10 rounded",
            {
              "text-primary border-primary": isRtl,
            }
          )}
          onClick={() => handleDirectionChange(true)}
        >
          Rtl
        </button>
      </div>
    </div>
  );
};

export default RtlSwitcher;
