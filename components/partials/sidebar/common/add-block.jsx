"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const AddBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? "mt-2" : "mt-2"} transition-all duration-600 ease-in-out`}>
      <div
        className={`relative p-4 shadow-sm border-2 border-primary cursor-pointer transition-all duration-600 ease-in-out ${
          isOpen ? "rounded-lg bg-primary-50" : "bg-transparent"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header with Chevron inside block */}
        <div className="flex items-center justify-between">
          <h3
            className={`font-semibold ${
              isOpen
                ? "text-xl text-center text-secondary-600"
                : "text-md text-primary"
            }`}
          >
            Power Plan Expired
          </h3>
          {isOpen ? (
            <ChevronDown className="absolute right-4 text-primary transition-all duration-600" size={20} />
          ) : (
            <ChevronRight className="text-primary transition-all duration-600" size={20} />
          )}
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="mt-3 text-center transition-all duration-600">
            <Button>Upgrade Plan</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlock;