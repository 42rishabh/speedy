"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AddBlock = ({}) => {
  return (
    <>
      <div className="mt-5 p-4 rounded-xl shadow-sm bg-primary-400 border-2 border-primary">
        <div class="flex flex-col gap-1 text-center">
          <h3 class="text-xl font-semibold text-secondary">
            Power Plan Expired
          </h3>
          <div class="mt-3">
            <Button> Upgrade Plan </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlock;