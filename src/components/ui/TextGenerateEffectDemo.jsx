"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Opportunities don’t knock forever. In waiting, you risk drifting — calm, uncertain, hoping the right door opens. But the truth is clear: the future belongs to those who build it. At V-EDU, every skill learned is a step forward, every project a new door unlocked. The decision is yours — wait for the opportunity, or create it right here, right now.
`;

export function TextGenerateEffectDemo() {
  return (
    <div className="max-w-3xl mx-auto">
      <TextGenerateEffect words={words} />
    </div>
  );
}
