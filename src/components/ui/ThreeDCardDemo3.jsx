"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo3() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
      {/* Card 1 */}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
             📈 Digital Marketing & Growth
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Learn SEO, Social Media, Paid Ads, and Growth Hacking.  
            Drive traffic, boost conversions, and scale businesses online.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1470&auto=format&fit=crop"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="digital marketing"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
           <CardItem
              translateZ={20}
              as="a"
              href="/careers/digital"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Learn more → 
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href="/payments-enroll"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              ENROLL NOW
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* Card 2 */}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            🎨 UI & UX Design
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          Master Figma, Design Thinking and User Research.  
            Create stunning, user-friendly interfaces that delight user experience.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
             <img
              src="https://uaewebsitedevelopment.com/wp-content/uploads/2022/08/UI-and-UX.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="ui ux design"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
             <CardItem
              translateZ={20}
              as="a"
              href="/careers/uiux"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Learn more →
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href="/payments-enroll"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              ENROLL NOW
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
