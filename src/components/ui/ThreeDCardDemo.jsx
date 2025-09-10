"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
      {/* Card 1 */}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            🛡 Cyber Security & Ethical Hacking
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            In just 6 months, become a certified cyber defender with hands-on hacking skills and 100% job assistance.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://thumbs.dreamstime.com/b/cyber-security-businessman-black-background-119577360.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="/careers/cyber"
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
            🤖 Data Science & AI
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Master Data Science & AI in 6 months with real-world projects, mentorship, and career placement support.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1681400630646-6df4b294bfea?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="/careers/data"
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
