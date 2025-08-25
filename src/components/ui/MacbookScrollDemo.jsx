import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            Get started with V-EDU’s most budget-friendly path into tech
            <br />
            <span
              className="block mt-6 bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-3xl md:text-6xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900"
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
      />
    </div>
  );
}
