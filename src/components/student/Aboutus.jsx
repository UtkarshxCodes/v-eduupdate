import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Aboutus.css";
import { HeroScrollDemo } from "../ui/HeroScrollDemo";
import { StickyScrollRevealDemo } from "../ui/StickyScrollRevealDemo";
import { BentoGridThirdDemo } from "../ui/BentoGridThirdDemo";
import Footer from '../../components/student/Footer';
import { WorldMapDemo } from "../ui/WorldMapDemo";
const AboutUs = () => {
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % 2);
    }, 5000);

    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % 2);
    }, 5000);

    const interval3 = setInterval(() => {
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % 2);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* Wrap both elements in a parent div */}
      <div>
        <div style={{ paddingTop: "120px", paddingBottom: "40px" }}>
          
          <HeroScrollDemo />
          <StickyScrollRevealDemo />
           {/* About Section: Responsive two-column layout */}
  <div className="about-container w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
    {/* Left Side: Heading and Description */}
    <div className="flex-1 flex flex-col justify-center items-start">
      <h1
        style={{ color: "#142d4f" }}
        className="text-2xl md:text-5xl font-bold dark:text-white mb-8 text-left"
      >
        About V-EDU
      </h1>
      <p className="description text-base md:text-lg text-neutral-700 dark:text-neutral-200 text-left">
        At <strong>V-EDU</strong>, we are on a mission to bridge the gap
        between education and employability in the fast-evolving tech world.
     <strong>V-EDU.us LLC</strong> is a
        career-focused education provider dedicated to helping learners build
        job-ready skills and connect with real-world opportunities.
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="flex-1 flex justify-center items-center">
      <img
        src={currentImageIndex1 === 0 ? assets.about1 : assets.about2}
        alt="About V-EDU 1"
        className="dynamic-image max-w-full rounded-xl shadow-lg"
      />
    </div>
  </div>
          <WorldMapDemo/>
            {/* What We Do Section: Responsive two-column layout with image left, text right */}
<div className="what-we-do-container w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
  {/* Left Side: Image in rectangular, gradient-bordered container with almost no gap */}
  <div className="flex-1 flex justify-center items-center">
    <div className="p-[2px] rounded-2xl  w-full max-w-xl h-64 md:h-80 md:max-w-2xl">
      <img
        src={currentImageIndex2 === 0 ? assets.about3 : assets.about4}
        alt="About V-EDU 2"
        className="h-full w-full object-cover rounded-[14px]" // 16px - 2px for border
        style={{ display: "block" }}
      />
    </div>
  </div>
  {/* Right Side: Heading and List, padded from right */}
  <div className="flex-1 flex flex-col justify-center items-start pr-2 md:pr-12">
    <h2
      style={{ color: "#142d4f" }}
      className="text-2xl md:text-5xl font-bold dark:text-white mb-8 text-left"
    >
      What We Do
    </h2>
    <ul className="list-none space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-200 text-left">
      <li>
        🎓 <strong>Career-Oriented Tech Courses:</strong> Learn technologies
        shaping the future — from Python and Kubernetes to AWS and AI.
      </li>
      <li>
        🛠 <strong>Mentorship &amp; Hands-On Training:</strong> Learn from
        professionals actively working in the field.
      </li>
      <li>
        🚀 <strong>Job Assistance Programs:</strong> Resume reviews, mock
        interviews, and career strategy sessions.
      </li>
      <li>
        🌍 <strong>Global-Ready Learning:</strong> Diverse, inclusive, and
        accessible learning environment.
      </li>
    </ul>
  </div>
</div>
{/* Summary and Image Side by Side */}
<div className="w-full flex flex-col md:flex-row items-center gap-8 mb-12">
  {/* Left: Summary Paragraph */}
  <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-0">
    <p className="text-lg md:text-2xl text-neutral-700 dark:text-neutral-200 py-4 md:py-0 px-16">
      V-EDU is committed to your success with world-class mentorship, industry-recognized certifications, and a proven path to real career growth. Our flexible, affordable programs are designed for ambitious learners and working professionals alike.
    </p>
  </div>
  {/* Right: Gradient-bordered image */}
  <div className="flex-1 flex justify-center items-center w-full">
    <div className="p-[2px] rounded-2xl  w-full max-w-xl h-64 md:h-80 md:max-w-2xl">
      <img
        src={currentImageIndex3 === 0 ? assets.about5 : assets.about6}
        alt="About V-EDU 3"
        className="h-full w-full object-cover rounded-[14px]"
        style={{ display: "block" }}
      />
    </div>
  </div>
</div>

{/* Why Choose V-EDU Section */}
<section className="why-choose mb-12 w-full flex flex-col items-center">
  <div className="relative w-full max-w-5xl mx-auto">

    <div className="flex flex-col md:flex-row items-center justify-center mb-4">
     
      <h2
        style={{ color: "#142d4f" }}
        className="text-2xl md:text-5xl font-bold dark:text-white mx-0 md:mx-8 text-center whitespace-nowrap my-4 md:my-0"
      >
        Why Choose V-EDU?
      </h2>
     
    </div>
   
  </div>
</section>


 <BentoGridThirdDemo />
            
            {/* Reach Us & Contact Info Side by Side */}
<section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 mb-12 ">
  {/* Map Section */}
  <div className="flex-1 flex flex-col items-center ml-9">
    <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 text-center"></h2>
    <a
      href="https://maps.app.goo.gl/1vyuEaeJJcEBBPEz8"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex justify-center"
    >
      <img
        src={assets.map}
        alt="V-edu.us Map View"
        className="map-image w-full max-w-2xl rounded-xl shadow-lg"
        style={{ objectFit: "cover" }}
      />
    </a>
  </div>
  {/* Contact Info Section */}
  <div className="flex-1 flex flex-col items-center">
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow border border-blue-200 dark:border-blue-800 p-6 w-full max-w-md">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">Contact Us</h2>
      <div className="space-y-3 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:(307)-216-4424" className="text-blue-700 underline break-all">
           (307)-216-4424
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@v-edu.us" className="text-blue-700 underline break-all">
            support@v-edu.us
          </a>
        </p>
        <p>
          <strong>Address:</strong>
          <br />
          1908 Thomes Ave STE 12363,
          <br />
          Cheyenne, WY 82001
        </p>
      </div>
    </div>
  </div>
</section>
          </div>
       
      </div>
        <Footer />
    </div>
  );
};

export default AboutUs;

/* WhyBox Component */
function WhyBox({ title, desc }) {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 shadow border border-blue-200 dark:border-blue-800 p-4 w-64 flex flex-col items-center text-center">
      <span className="text-2xl mb-2">✅</span>
      <span className="font-semibold text-neutral-800 dark:text-neutral-100">{title}</span>
      <div className="font-normal text-neutral-600 dark:text-neutral-300 text-base mt-1">{desc}</div>
    </div>
  );
}