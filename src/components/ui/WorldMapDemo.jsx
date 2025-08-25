"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-3xl md:text-6xl dark:text-white mb-6" style={{ color: "#142d4f" }}>
          Global Learning{" "}
          <span className="bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-3xl md:text-6xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900">
            {"Network".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-lg md:text-2xl text-neutral-500 max-w-3xl mx-auto py-6">
        Join learners across continents. V-EDU connects ambitious minds worldwide with top mentors, creating a borderless classroom experience.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]} />
    </div>
  );
}
