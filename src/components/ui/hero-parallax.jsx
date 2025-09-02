"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl relative mx-auto py-8 md:py-40 px-2 sm:px-4 w-full left-0 top-0">
    <h1 className="text-base xs:text-lg sm:text-2xl md:text-5xl font-bold dark:text-white leading-snug sm:leading-tight break-words">
      <span className="block sm:inline">
        From Learning to Earning —
      </span>
      <span className="block sm:inline">
        V-EDU accelerates your career
      </span>
      <span className="block sm:inline">
        with expert-led bootcamps
      </span>
      <span className="block sm:inline">
        and real job support.
      </span>
    </h1>
    <p className="max-w-xs sm:max-w-2xl text-xs xs:text-sm sm:text-base md:text-xl mt-4 sm:mt-8 darkblue:text-neutral-200 leading-normal sm:leading-relaxed break-words">
      <span className="block sm:inline">
        V-EDU is where ambition meets opportunity.
      </span>
      <span className="block sm:inline">
        Get expert-led training, hands-on projects,
      </span>
      <span className="block sm:inline">
        and 100% placement assistance to launch your career.
      </span>
    </p>
  </div>
);

export const ProductCard = ({ product, translate }) => (
  <motion.div
    style={{
      x: translate,
    }}
    whileHover={{
      y: -20,
    }}
    key={product.title}
    className="group/product h-96 w-[30rem] relative shrink-0"
  >
    <a
      href={product.link}
      className="block group-hover/product:shadow-2xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </a>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 text-white text-xs xs:text-sm sm:text-base md:text-lg font-semibold drop-shadow break-words">
      {product.title}
    </h2>
  </motion.div>
);