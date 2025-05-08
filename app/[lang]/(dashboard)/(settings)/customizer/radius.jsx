import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store";
import { cn } from "@/lib/utils";

const RadiusInit = () => {
  const { radius, setRadius } = useThemeStore();

  return (
    <div className="mb-4">
      <div className="text-xl font-bold text-primary rounded-md bg-primary-50 p-2">
        Rounded
      </div>
      <div className="flex w-full gap-4 m-3">
        {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
          return (
            <Button
              variant="outline"
              key={value}
              onClick={() => setRadius(parseFloat(value))}
              // className={cn(
              //   value === radius && "border-2 border-primary bg-primary"
              // )}
              className={cn(
                radius === parseFloat(value) &&
                  "border-2 border-primary bg-primary text-primary-foreground"
              )}
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RadiusInit;
