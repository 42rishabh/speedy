"use client"
import * as React from "react";

import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import slider1 from "@/public/images/all-img/slider-1.png";

const Settings = () => {

  return (
    <div className="flex gap-6 mt-5">
      <div className="w-2/3">

        <Card title="Saved Payment Options" className="rounded-xl">
          <Carousel className="w-full max-w-3xl	mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            orientation="horizontal"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem className=" w-full" key={index}>
                  <div className="p-1">
                    <div className="flex flex-col gap-4 justify-between aspect-square h-[300px] w-full p-5 bg-yellow-500 rounded-xl">
                      <div className="flex justify-between w-full mt-5">
                        <h4 className="text-xl text-white font-semibold uppercase"> Company Name </h4>
                        <h4 className="text-lg text-white font-semibold uppercase"> Credit Card </h4>
                      </div>

                      <div className="flex justify-between items-end w-full mb-5">
                        <div className="flex flex-col justify-between w-full mt-5">
                          <h4 className="text-xl text-white font-semibold uppercase"> Rishabh Saxena </h4>
                          <h4 className="text-3xl text-white font-semibold uppercase"> 4532 3100 9999 1049 </h4>
                        </div>
                        <div className="flex justify-between gap-2 items-center">
                          <h4 className="text-xs text-white font-semibold uppercase mt-5"> Valid <br/> Upto </h4>
                          <h4 className="text-xl text-white font-semibold uppercase mt-5"> 12/30 </h4>
                        </div>
                      </div>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>
      </div>
      <div className="w-1/3">
        <div className="bg-white p-3 rounded-xl">
          <h4 className="text-2xl font-bold text-center"> Payment History </h4>
          <hr className="mt-2" />

          <div className="flex flex-col gap-3 mt-1 p-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-lg font-medium"> Added from Credit Card </p>
                <p className="text-sm"> 21st Jan, 2024 <br/> 10:20:00 </p>
              </div>
              <p className="text-green-500 text-2xl font-semibold"> + $12.00</p>
            </div>
            <hr />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-lg font-medium"> Added from Credit Card </p>
                <p className="text-sm"> 21st Jan, 2024 <br/> 10:20:00 </p>
              </div>
              <p className="text-green-500 text-2xl font-semibold"> + $12.00</p>
            </div>
            <hr />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-lg font-medium"> Added from Credit Card </p>
                <p className="text-sm"> 21st Jan, 2024 <br/> 10:20:00 </p>
              </div>
              <p className="text-green-500 text-2xl font-semibold"> + $12.00</p>
            </div>
            <hr />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-lg font-medium"> Added from Credit Card </p>
                <p className="text-sm"> 21st Jan, 2024 <br/> 10:20:00 </p>
              </div>
              <p className="text-green-500 text-2xl font-semibold"> + $12.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;