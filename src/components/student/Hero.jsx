import React from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center w-screen h-screen bg-cover bg-center px-4 md:px-16"
      style={{
        backgroundImage: `url(${assets.backgroundImage})`,
        maxHeight: '110vh',
        maxWidth: '100vw',
      }}
    >
      {/* Heading */}
      <h1
        className="md:text-6xl text-3xl relative font-bold max-w-3xl z-10 mb-2 text-left"
        style={{ color: "#142d4f" }}
      >
        Launch Your Tech Career with Confidence
      </h1>

      {/* Subheading */}
      <p className="md:text-xl text-lg max-w-xl font-medium mt-4 z-10 text-left text-[#142d4f]">
       Ready to launch into one of the highest-ranked bootcamps in the Us & Uk - Let’s talk today!
      </p>

      {/* Call Us Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <a href="tel:(307)-216-4424">
          <button className="call-us-btn px-8 py-3 rounded-md font-bold">
            Call Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
