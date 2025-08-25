"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const content = [
  {
    title: "Seamless Enrollment & Onboarding",
    description:
      "From the moment you enroll, we make your journey simple and structured. Our onboarding process ensures you’re set up with all the tools, resources, and guidance you need to hit the ground running.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-white">
        <img
          src="https://www.skillshub.com/wp-content/uploads/2022/11/onboarding-illustration.jpg"
          alt="Onboarding Illustration"
          className="h-full w-full object-contain rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "Collaborative Learning Experience",
    description:
      "Work together in real-time with mentors, peers, and industry experts. Collaborate on projects, share ideas, and receive immediate feedback. Our platform ensures every student stays aligned and engaged, creating a productive learning environment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-white">
        <img
          src="https://edvishan.com/wp-content/uploads/2022/07/COLLABORATIVE-LEARNING-image-scaled.jpg"
          alt="Collaborative Learning"
          className="h-full w-full object-contain rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "Project Completion & Career Launch",
    description:
      "Build, refine, and deploy real-world projects while receiving guidance at every step. From the final project to portfolio readiness, our bootcamp ensures you’re fully prepared to transition into your new career with confidence and credibility.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-white">
        <img
          src="https://careeralley.com/wp-content/uploads/launch-your-career.jpg"
          alt="Career Launch"
          className="h-full w-full object-contain rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "Career Support & Job Assistance",
    description:
      "Beyond completing projects, we provide dedicated career guidance and job assistance. From resume building and portfolio review to interview preparation and placement support, we ensure every student is fully prepared to secure their first role in the industry.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-white">
        <img
          src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1712232441/catalog/1775855752773373952/kwp5uiid9oxcqwxzm2m2.jpg"
          alt="Career Support"
          className="h-full w-full object-contain rounded-xl"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}