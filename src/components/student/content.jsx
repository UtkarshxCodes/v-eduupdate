import React from 'react';

export default function Content() {
  return (
    <div className="w-screen py-16 bg-white">
      {/* Discount Banner */}
      <div className="flex justify-center mb-6">
        <a href="tel:+18883444990">
          <button
            className="px-8 py-4 rounded-2xl font-bold text-2xl md:text-4xl bg-white shadow-lg border-2 border-blue-300 flex items-center justify-center transition hover:scale-105"
            style={{ minWidth: "280px" }}
          >
            <span className="bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-3xl md:text-6xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900">
              Get 25% Off
            </span>
          </button>
        </a>
      </div>
      {/* Main Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-4 text-[#142d4f]">
        Breaking barriers to tech careers V-EDU has you covered
      </h1>
      {/* Subheading */}
      <p className="text-center text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto mb-12">
        At V-EDU you get flexible payments a trial period, and complete peace of mind.
      </p>
      {/* Payment Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {/* Upfront Payment Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-2 text-[#142d4f]">Upfront Payment</h2>
          <p className="text-base font-semibold mb-2 text-blue-700">The most affordable choice</p>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-bold text-[#142d4f]">$2,499</span>
            <span className="line-through text-gray-400 text-xl">$3,000</span>
          </div>
          <span className="text-green-600 font-semibold mb-2">💰 Save up to $500</span>
          <p className="text-neutral-700 mb-4">
            Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!
          </p>
        </div>
      
        {/* Tuition Financing Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border-t-4 border-pink-500">
          <h2 className="text-2xl font-bold mb-2 text-[#142d4f]">Register Now – Pay Later</h2>
          <p className="text-base font-semibold mb-2 text-pink-700">Learn now, pay with flexibility</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-lg text-neutral-700">Starting at </span>
            <span className="text-3xl font-bold text-[#142d4f]">$199</span>
            <span className="text-lg text-neutral-700">per month</span>
          </div>
          <span className="text-gray-700 mb-2">$2999 in total</span>
          <p className="text-neutral-700 mb-2">
           with AfterPay and other flexible payment partners! <span className="text-red-600 font-semibold">Credit check req’d.</span>
          </p>
          <span className="text-neutral-500 text-sm">Join now at a minimal cost and spread the rest into easy installments.<br /> Focus on learning today, pay comfortably over time. Multiple plans available depending on your needs.</span>
        </div>
        {/* One-on-One Tuitions Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border-t-4 border-violet-500">
          <h2 className="text-2xl font-bold mb-2 text-[#142d4f]">One-on-One Tuitions</h2>
          <p className="text-base font-semibold mb-2 text-violet-700">The best personalized learning option</p>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-bold text-[#142d4f]">$3,999</span>
            <span className="line-through text-gray-400 text-xl">$4,999</span>
          </div>
          <span className="text-green-600 font-semibold mb-2">💰 Save up to $1,000</span>
          <p className="text-neutral-700 mb-4">
            Experience one-on-one classes with expert mentors tailored to your pace and goals. Get 100% personalized attention and guidance throughout your journey. No risk—you can withdraw with a 100% refund in the first 2 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}