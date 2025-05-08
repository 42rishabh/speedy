"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs"; 
import Link from "next/link";
import { CircularProgress} from "./progress";
import { Progress } from "@/components/ui/progress";

import { Switch } from "@/components/ui/switch";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const WebsiteSeo = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        <BreadcrumbItem>Website SEO</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-green-300 border-2 border-green-600">
          <div className="flex justify-between items-center">
            <p> Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts.</p>
            <Button className="bg-green-600"> Book An Appointment </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2 p-3">
        <h3 className="text-2xl font-bold uppercase mb-3"> Website SEO </h3>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-sm font-semibold"> SEO Analysis for </h3>
              <div className="flex gap-4 items-center">
                <Link href="google.com" className="text-lg font-bold"> Wordpressspeedy.com </Link>
                <a 
                  href="google.com"
                  className="text-primary-500"
                > Restart SEO Analyzer </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex gap-2" variant="outline"> 
                Print
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>
                  <rect x="6" y="14" width="12" height="8" rx="1"/>
                </svg>
              </Button>
              <Button className="flex gap-2"> 
                Download
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </Button>
            </div>
          </div>

          <hr />

          <div className="flex mt-3 gap-5">
            <div className="flex w-1/2 gap-4 items-center">
             <CircularProgress value="91" showValue />

             <div className="flex flex-col w-full gap-4 p-5 rounded-xl bg-primary-200 border-2 border-transparent hover:border-primary-600 hover:bg-transparent transition ease-in-out duration-700">
              <div>
                  <div className="flex justify-between">
                    <h6 className="text-sm font-semibold"> Passed Tests </h6>
                    <h6 className="text-sm font-semibold"> 26 / 29 </h6>
                  </div>
                  <Progress value="85" color="primary" isStripe isAnimate />
                </div>

                <div>
                  <div className="flex justify-between">
                    <h6 className="text-sm font-semibold"> Warning Tests </h6>
                    <h6 className="text-sm font-semibold"> 0 / 29 </h6>
                  </div>
                  <Progress value="0" color="warning" isStripe isAnimate />
                </div>

                <div>
                  <div className="flex justify-between">
                    <h6 className="text-sm font-semibold"> Failed Tests </h6>
                    <h6 className="text-sm font-semibold"> 3 / 29 </h6>
                  </div>
                  <Progress value="11" color="destructive" isStripe isAnimate />
                </div>
             </div>
            </div>

            <div className="flex flex-col justify-center w-1/2 border-4 rounded-xl p-3">
              <div className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <h6> https://wordpressspeedy.com </h6>
              </div>

              <hr className="my-2" />

              <h4 className="text-primary-600 text-2xl font-bold"> Farm House in Lahore </h4>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam, accusamus expedita aliquam quaerat hic recusandae, modi unde eligendi rerum animi vel eos perspiciatis quis consequuntur! Quae, laborum eius. Voluptatem commodi eaque molestiae excepturi iure omnis adipisci minima neque optio exercitationem assumenda, a impedit facilis veritatis, molestias sed ab repellat, necessitatibus eius accusamus ipsa ullam hic! Repudiandae veniam fugiat nihil nostrum ut nam voluptatibus dolorem, deleniti doloribus nemo ipsum tempor...  </p>

              <div className="flex justify-end gap-3 mt-5">
                <div className="bg-primary-400 rounded-3xl p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div className="bg-primary-400 rounded-3xl p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </div>
                <div className="bg-primary-400 rounded-3xl p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-lg font-bold"> Enhancement Modes </h3>
              <p className="text-md"> Select from our wide range of predefined optimization modes to boost your site's rankings. </p>
            </div>
            <a className="text-primary-800" href=""> See modes comparison </a>
          </div>

          <hr />

          <div className="flex mt-3 gap-3">
            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Basic </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Advance </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Premium </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Custom </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebsiteSeo;