"use client";

import { Card, CardContent } from "@/components/ui/card";

import coverImage from "@/public/images/all-img/user-cover.png"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const SettingsHeader = () => {

  return (
    <>
      
      <Card className="mt-6 rounded-2xl ">
        <CardContent className="p-0">
          <div className="relative h-[210px] xl:h-[296px] rounded-2xl w-full bg-cover object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${coverImage.src})` }}
          >
            <Button  className="absolute bottom-5 right-6 rounded px-5" size="sm">
              <Icon className="w-4 h-4 mr-1" icon="heroicons:pencil-square" />
              Change Cover
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingsHeader;