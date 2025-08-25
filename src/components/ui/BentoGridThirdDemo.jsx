"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconFileBroken,
  IconMessageChatbotFilled,
  IconPhoneCall,
  IconStairsUp,
  IconTournament,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };
  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div variants={variants} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
        <img
  src="/fav.png"
  alt="V-EDU Logo"
  className="h-6 w-6 rounded-full shrink-0 object-cover bg-white"
/>
      <p className="text-sm text-gray-600 dark:text-gray-300">Resume to Offer Letter Support</p>
      </motion.div>
      <motion.div variants={variantsSecond} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
       <p className="text-sm text-gray-600 dark:text-gray-300">High-Paying Career Paths.</p>
      <img
  src="/fav.png"
  alt="V-EDU Logo"
  className="h-6 w-6 rounded-full shrink-0 object-cover bg-white"
/>
      </motion.div>
      <motion.div variants={variants} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
       <img
  src="/fav.png"
  alt="V-EDU Logo"
  className="h-6 w-6 rounded-full shrink-0 object-cover bg-white"
/>
       <p className="text-sm text-gray-600 dark:text-gray-300">Unlock Your Earning Potential upto $100k</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.6, ease: "easeOut" } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };

  const tasks = [
    "Cybersecurity Simulations",
    "Defend against live cyber threats, practice",
    "penetration testing, and secure critical systems.",
    "DevOps in Action ",
    "Master CI/CD pipelines",
    "containerization, and cloud deployments",
    
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {tasks.map((task, i) => (
        <motion.div
          key={i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 dark:border-white/[0.2] px-3 py-1 bg-neutral-100 dark:bg-black text-xs font-medium text-neutral-600 dark:text-neutral-300 overflow-hidden"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 + i * 0.1 } }}
            className="truncate"
          >
            {task}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
   <img
  src="https://cdn.careerconnect.uog.edu/wp-content/uploads/sites/76/2023/02/image.png"
  alt="Career Connect"
  className="flex-1 w-full h-full min-h-[6rem] rounded-lg object-cover"
/>
  );
};
const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };
  return (
    <motion.div initial="initial" animate="animate" whileHover="hover" className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <motion.div variants={first} className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img src="https://th.bing.com/th/id/R.9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw&r=0" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">I want the lowest rates but still top-quality training.</p>
        <p className="border border-blue-500 bg-white-100 dark:bg-red-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">Unrealistic</p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img src="https://designimages.appypie.com/profilepicture/profilepicture-1-head-person.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Do tutors even have real industry experience?</p>
        <p className="border border-blue-500 bg-white-100 dark:bg-green-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">Skeptical</p>
      </motion.div>
      <motion.div variants={second} className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img src="https://i1.rgstatic.net/ii/profile.image/11431281156724773-1683609428365_Q512/Kristina-Lambrakis.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">But do these certifications even matter?</p>
        <p className="border border-green-500 bg-sky-100 dark:bg-orange-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">Doubtful</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };
  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div variants={variants} className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
        <img src="https://tse4.mm.bing.net/th/id/OIP.UeLOwMtpBiO9qFIgWquHtwAAAA?r=0&w=308&h=308&rs=1&pid=ImgDetMain&o=7&rm=3" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
        <p className="text-xs text-neutral-500">Why is my SQL query so slow?I’m stuck with Docker setup, what do I do?How do I secure my Wi-Fi from hackers?</p>
      </motion.div>
      <motion.div variants={variantsSecond} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500">Connecting to mentor...</p>
        <img
  src="/fav.png"
  alt="V-EDU Logo"
  className="h-6 w-6 rounded-full shrink-0 object-cover bg-white"
/>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "100% Job Assistance",
    description: <span className="text-sm">
Career support from resume building to interview prep until you land your dream role.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconStairsUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hands-On Projects",
    description: <span className="text-sm">Learn by building real-world projects that mirror industry use cases.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "One-on-One Mentorship",
    description: <span className="text-sm">
Personalized training sessions tailored to your pace and career goals.</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconPhoneCall className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "One Solution to All Your Doubts",
    description: <span className="text-sm">V-EDU offers top-quality courses at the most affordable rates, taught by mentors with 5+ years of industry experience. Our globally recognized certifications give your resume the career boost it deserves.</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconMessageChatbotFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Instant guidance when you need it most.",
    description: <span className="text-sm">Your doubts won’t wait — neither should your learning.</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconTournament className="h-4 w-4 text-neutral-500" />,
  },
];

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}