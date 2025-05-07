"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";

const PageViews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(30000); // matching image 1 value
  const maxValue = 60000;

  return (
    <div className="mt-2 transition-all duration-600 ease-in-out">
      <div
        className={`relative cursor-pointer transition-all duration-600 ease-in-out p-4 ${
          isOpen ? "rounded-lg shadow-sm border-2 border-primary border bg-white" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-center mb-4">Page Views</h3>
            <Progress value={(value / maxValue) * 100} className="h-3 w-full bg-gray-200" />
            <span className="text-sm font-medium text-muted-foreground">{value} / {maxValue}</span>
            <hr className="w-full mt-4" />
            <div className="mt-1 w-full text-xs text-muted-foreground text-center flex justify-between">
              <p>Last Updated -</p>
              <div className="flex flex-col"> 
                <p>4/18/2025</p>
                <p>1:33:35 PM</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-between">
            <Progress value={(value / maxValue) * 100} className="h-3 w-full bg-gray-200" />
            <span className="mt-2 text-sm font-medium text-muted-foreground">{value} / {maxValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageViews;