"use client"
import {plans} from "./data";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const[getStartesd , setGetStartesd] = React.useState(false)

  return (
    <div className="w-full flex flex-col items-center text-center bg-primary-300 py-14 px-7 mt-3">
      <div className="flex flex-col">
        <h4 className="text-xl lg:text-2xl font-bold text-default-800"> The Perfect Plan For Your Needs </h4>
        <span className="text-m font-normal"> Websites That Load Faster Excel in SEO, Elevate User Experience, and Optimize Ad Spend: Transform Your Site's Performance Now! </span>
      </div>

      <Tabs defaultValue="mothly" className="mt-10 md:w-[1024px] items-center">
      <TabsList className="grid w-full grid-cols-3 h-15 rounded-full p-3">
        <TabsTrigger className="rounded-3xl p-3" value="mothly">Monthly</TabsTrigger>

        <TabsTrigger className="rounded-3xl p-3" value="password">Yearly</TabsTrigger>

        <TabsTrigger className="rounded-3xl p-3" value="custom">Custom Plan</TabsTrigger>

      </TabsList>

      <TabsContent value="mothly">
      </TabsContent>

      <TabsContent value="password">
      </TabsContent>

      <TabsContent value="custom">
      </TabsContent>
    </Tabs>

      {plans.map(item => (
        <div key={item.id} className="flex flex-col items-center gap-5 text-start">

          <div className="flex gap-5 mt-5">

            {/* Basic Plan */}
          <div className="w-1/4 flex flex-col gap-5 bg-white bg-opacity-50 backdrop-blur-lg rounded-xl px-5 py-10 justify-between relative">
          <div className="bgimg absolute bg-red-500 px-10 top-[-25px] text-white translate-y-2/4 translate-x-1/3 py-1 rounded-full"> Forever Free Plan </div>
            <div className="flex flex-col gap-5" >
              <div>
                <div className="flex justify-between">
                  <h4 className="text-2xl font-bold"> {item.free.name} </h4>
                  <Checkbox radius="xl" color="success" id="circle_11" onClick={() => setGetStartesd(!getStartesd)}></Checkbox>
                </div>
                <p> {item.free.underline} </p>
                <br></br>
              </div>
              <div>
                <div className="flex items-end">
                  <h2 className="text-4xl text-default-800 font-semibold"> ₹{item.free.price}</h2>
                  <span className="text-2xl text-default-800 font-semibold">INR / {item.free.pay} </span>
                </div>
                <p>{item.free.referral}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg"> Includes:</h4>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.free.plandetails.first}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.free.plandetails.second}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.free.plandetails.third}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.free.plandetails.fourth}</span>
                </Checkbox>
              </div>
            </div>
            {getStartesd && (<Button> Get Started </Button>)}
          </div>

          {/* Power Plan */}
          <div className="w-1/4 flex flex-col gap-5 bg-white bg-opacity-50 backdrop-blur-lg rounded-xl px-5 py-10 justify-between">
            <div className="flex flex-col gap-5" >
              <div>
                <div className="flex justify-between">
                  <h4 className="text-2xl font-bold"> {item.power.name} </h4>
                  <Checkbox radius="xl" color="success" id="circle_11" onClick={() => setGetStartesd(!getStartesd)}></Checkbox>
                </div>
                <p> {item.power.underline} </p>
                <br></br>
              </div>
              <div>
                <div className="flex items-end">
                  <h2 className="text-4xl text-default-800 font-semibold"> ₹{item.power.price}</h2>
                  <span className="text-2xl text-default-800 font-semibold">INR / {item.power.pay} </span>
                </div>
                <p>{item.power.referral}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg"> Includes:</h4>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.first}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.second}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.third}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.fifth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.sixth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.power.plandetails.seventh}</span>
                </Checkbox>
              </div>
            </div>
            {getStartesd && (<Button> Get Started </Button>)}
          </div>

          {/* Booster Plan */}
          <div className="w-1/4 flex flex-col gap-5 bg-white bg-opacity-50 backdrop-blur-lg rounded-xl px-5 py-10 justify-between relative">
          <div className="bgimg absolute bg-green-500 px-10 top-[-25px] text-white translate-y-2/4 translate-x-1/2 py-1 rounded-full"> Best Seller </div>
            <div className="flex flex-col gap-5" >
              <div>
                <div className="flex justify-between">
                  <h4 className="text-2xl font-bold"> {item.booster.name} </h4>
                  <Checkbox radius="xl" color="success" id="circle_11" onClick={() => setGetStartesd(!getStartesd)}></Checkbox>
                </div>
                <p> {item.booster.underline} </p>
                <br></br>
              </div>
              <div>
                <div className="flex items-end">
                  <h2 className="text-4xl text-default-800 font-semibold"> ₹{item.booster.price}</h2>
                  <span className="text-2xl text-default-800 font-semibold">INR / {item.booster.pay} </span>
                </div>
                <p>{item.booster.referral}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg"> Includes:</h4>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.first}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.second}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.third}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.fifth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.sixth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.seventh}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.booster.plandetails.eighth}</span>
                </Checkbox>
              </div>
            </div>
            {getStartesd && (<Button> Get Started </Button>)}
          </div>

          {/* Super Plan */}
          <div className="w-1/4 flex flex-col gap-5 bg-white bg-opacity-50 backdrop-blur-lg rounded-xl px-5 py-10 justify-between">
            <div className="flex flex-col gap-5" >
              <div>
                <div className="flex justify-between">
                  <h4 className="text-2xl font-bold"> {item.super.name} </h4>
                  <Checkbox radius="xl" color="success" id="circle_11" onClick={() => setGetStartesd(!getStartesd)}></Checkbox>
                </div>
                <p> {item.super.underline} </p>
                <br></br>
              </div>
              <div>
                <div className="flex items-end">
                  <h2 className="text-4xl text-default-800 font-semibold"> ₹{item.super.price}</h2>
                  <span className="text-2xl text-default-800 font-semibold">INR / {item.super.pay} </span>
                </div>
                <p>{item.super.referral}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg"> Includes:</h4>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.first}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.second}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.third}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.fifth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.sixth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.seventh}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.eighth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.ninth}</span>
                </Checkbox>
                <Checkbox defaultChecked radius="xl" color="success" id="circle_11"> <span className="text-m text-default-800 font-semibold">{item.super.plandetails.tenth}</span>
                </Checkbox>
              </div>
            </div>
            {getStartesd && (<Button> Get Started </Button>)}
          </div>

          </div>

          <div className="flex w-1/2 mt-10 bg-primary-200 rounded-3xl items-center justify-between p-2 px-2">
            <h4 className="ml-4 text-m font-bold">Grab it fast to Get Special Prices</h4>
            <Button className="rounded-3xl">Book Demo Now</Button>
          </div>

        </div>
      ))}
      </div>
  );
}
export default Settings;