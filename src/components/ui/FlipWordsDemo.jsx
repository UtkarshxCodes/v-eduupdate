import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Success", "Growth", "Achievements", "Dreams"];

  return (
    <div className="h-[16rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal" style={{ color: "#142d4f" }}>
         Stories of{" "}
        <FlipWords words={words} className="!text-[#3bb4f5]" /> <br />
        from Our Learners
      </div>
    </div>
  );
}
