"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const AddBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${ isOpen ? "mt-5" : "mt-2"}`}>
      <div
        className={`relative p-4 shadow-sm border-primary cursor-pointer ${ isOpen ? "border-2 rounded-lg bg-primary-50" : "bg-primary"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header with Chevron inside block */}
        <div className="flex items-center justify-between">
          <h3
            className={`font-semibold ${
              isOpen ? "text-xl text-center text-secondary-600" : "text-md text-secondary"
            }`}
          >
            Power Plan Expired
          </h3>
          {isOpen ? <ChevronDown className="absolute right-4 text-primary" size={20} /> : <ChevronRight className="text-secondary" size={20} />}
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="mt-3 text-center">
            <Button>Upgrade Plan</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlock;