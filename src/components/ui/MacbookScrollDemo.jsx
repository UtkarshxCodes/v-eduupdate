import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div
      className="
        w-full overflow-hidden bg-white dark:bg-[#0B0B0F]
        flex justify-center items-start
        py-1 sm:py-8 md:py-16
        min-h-[120px] sm:min-h-[420px] md:min-h-[600px]
        mt-[-24vw] sm:mt-0
      "
      style={{
        minHeight: "120px",
      }}
    >
      <MacbookScroll
        title={
          <span>
            <span className="macbook-scroll-title block text-[7vw] sm:text-2xl md:text-4xl mb-1 sm:mb-4 mt-0 sm:mt-0 font-bold leading-tight">
              Get started with V-EDU’s most budget-friendly path into tech
            </span>
            <span
              className="macbook-scroll-subtitle block mt-1 sm:mt-6 bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-[9vw] sm:text-3xl md:text-6xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900 font-extrabold leading-tight"
            >
              Lets Get Started
            </span>
          </span>
        }
        badge={
          <a href="www.v-edu.us">
            <img
              src="/fav.png"
              alt="V-EDU Logo"
              className="h-10 w-10 -rotate-12 transform rounded-full object-cover"
            />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
        macbookClassName="w-[98vw] max-w-[540px] sm:w-[80vw] sm:max-w-[520px] md:w-[60vw] md:max-w-[700px]"
      />
      <style>
        {`
          @media (max-width: 640px) {
            .macbook-scroll-title {
              font-size: 7vw !important;
              line-height: 8vw !important;
              margin-bottom: 1vw !important;
              margin-top: 0 !important;
            }
            .macbook-scroll-subtitle {
              font-size: 9vw !important;
              line-height: 10vw !important;
              margin-top: 1vw !important;
            }
          }
        `}
      </style>
    </div>
  );
}
