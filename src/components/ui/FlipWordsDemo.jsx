import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Success", "Growth", "Achievements", "Dreams"];

  return (
    <div className="h-[16rem] flex justify-center items-center px-2 sm:px-4">
      <div
        className="text-3xl xs:text-3xl sm:text-5xl md:text-6xl mx-auto font-normal text-center"
        style={{ color: "#142d4f" }}
      >
        Stories of{" "}
        <FlipWords words={words} className="!text-[#3bb4f5]" /> <br />
        from Our Learners
      </div>
    </div>
  );
}
