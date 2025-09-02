"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { assets } from "@/assets/assets";

const logos = [
  assets.microsoft_logo,
  assets.walmart_logo,
  assets.accenture_logo,
  assets.adobe_logo,
  assets.paypal_logo,
  assets.google_logo,
  assets.amazon_logo,
  assets.deloitte_logo,
  assets.ibm_logo,
];

export function HeroHighlightDemo() {
  // 5 on top, 4 on bottom
  const topLogos = logos.slice(0, 5);
  const bottomLogos = logos.slice(5);

  return (
    <HeroHighlight>
      <div className="flex flex-col items-center gap-6">
        {/* Top row: 5 logos */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-20 mb-4 w-full">
          {topLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-top-${i}`}
              className="object-contain w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16"
            />
          ))}
        </div>
        {/* Centered text */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center"
        >
          From startups to global giants, our grads get hired everywhere.
          {" "}
          <Highlight className="text-black dark:text-white">
            Enroll now and accelerate your growth.
          </Highlight>
        </motion.h1>
        {/* Bottom row: 4 logos */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-20 mt-4 w-full">
          {bottomLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-bottom-${i}`}
              className="object-contain w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16"
            />
          ))}
        </div>
      </div>
    </HeroHighlight>
  );
}
