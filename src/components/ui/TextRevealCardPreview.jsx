"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div
      className="flex items-center justify-center bg-[#ffffff] h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="You bring ambition. &" revealText="We bring the learning. ">
        <TextRevealCardTitle>
         ✨ Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        The shortcut from learning to earning
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
