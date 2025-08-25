"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              We go beyond teaching technical skills <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none block mb-8">
                we prepare our students for the full journey
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/hero-scroll.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}