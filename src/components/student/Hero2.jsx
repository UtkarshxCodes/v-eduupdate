import React from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';

const Hero2 = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center w-screen h-screen bg-cover bg-center px-4 md:px-16"
      style={{
        backgroundImage: `url(${assets.mobileBackgroundImage})`,
        maxHeight: '110vh',
        maxWidth: '100vw',
      }}
    >
      {/* Heading with glow effect */}
      <h1
        className="text-4xl md:text-6xl font-bold max-w-3xl z-10 mb-2 text-left text-white"
        style={{
          textShadow: '0 0 8px rgba(0,0,0,0.5), 0 0 2px #fff',
        }}
      >
        Launch Your Tech Career with Confidence
      </h1>

      {/* Subheading with glow effect */}
      <p
        className="text-lg md:text-xl max-w-xl font-medium mt-4 z-10 text-left text-white"
        style={{
          textShadow: '0 0 6px rgba(0,0,0,0.4), 0 0 1px #fff',
        }}
      >
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

export default Hero2;