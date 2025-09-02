import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const careers = [
  { to: "/careers/cyber", label: "Cyber Security & Ethical Hack" },
  { to: "/careers/data", label: "Data Science & AI" },
  { to: "/careers/cloud", label: "Cloud Computing & DevOps" },
  { to: "/careers/digital", label: "Digital Marketing & Growth" },
  { to: "/careers/fullstack", label: "Fullstack Software Dev" },
  { to: "/careers/uiux", label: "UI & UX Design" },
];

const whyChooseUs = [
  { to: "/about", label: "Your Career Launchpad" },
  { to: "/apply", label: "Simple Enrollment Process" },
  { to: "/payments", label: "Flexible Payment Plans" },
  { to: "/contact", label: "Always Here to Help" },
  { to: "/job-openings", label: "Recent Job Openings" },
];

const essentials = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/return-policy", label: "Return Policy" },
  { to: "/Contact", label: "Contact Us" },
  { to: "/About", label: "About" },
];

const Footer = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigateAndScrollToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-white w-full shadow-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 border-b border-gray-200 pb-10">

          {/* Logo and Description */}
          <div className="flex flex-col md:items-start items-center w-full">
            <img
              src={assets.logo_dark}
              alt="logo"
              className="w-32 md:w-40 drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.15))' }}
            />
            <p className="mt-6 text-center md:text-left text-base text-gray-700 font-medium">
              Empowering learners worldwide with top-notch educational resources and tools to achieve their goals.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="text-blue-700 hover:text-blue-900 transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className="text-blue-700 hover:text-blue-900 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-blue-700 hover:text-blue-900 transition" />
              </a>
            </div>
          </div>

          {/* Navbar Buttons Section */}
          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-bold text-black mb-5 text-lg">Explore</h2>
            <div className="w-full">
              {/* Careers Dropdown */}
              <div className="mb-4">
                <button
                  className="w-full text-left px-4 py-3 bg-gray-100 text-blue-900 font-bold rounded-lg mb-1 shadow hover:bg-blue-50 transition"
                  onClick={() => setOpenDropdown(openDropdown === 'careers' ? null : 'careers')}
                >
                  Careers
                  <span className="float-right">{openDropdown === 'careers' ? '▲' : '▼'}</span>
                </button>
                {openDropdown === 'careers' && (
                  <div className="pl-2">
                    {careers.map(item => (
                      <button
                        key={item.to}
                        className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 rounded transition font-semibold"
                        onClick={() => navigateAndScrollToTop(item.to)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Why Choose Us Dropdown */}
              <div className="mb-4">
                <button
                  className="w-full text-left px-4 py-3 bg-gray-100 text-blue-900 font-bold rounded-lg mb-1 shadow hover:bg-blue-50 transition"
                  onClick={() => setOpenDropdown(openDropdown === 'why' ? null : 'why')}
                >
                  Why Choose Us
                  <span className="float-right">{openDropdown === 'why' ? '▲' : '▼'}</span>
                </button>
                {openDropdown === 'why' && (
                  <div className="pl-2">
                    {whyChooseUs.map(item => (
                      <button
                        key={item.to}
                        className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 rounded transition font-semibold"
                        onClick={() => navigateAndScrollToTop(item.to)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Essentials Section */}
              <div className="mb-4">
            
                <div>
                  {essentials.map(item => (
                    <button
                      key={item.to}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded transition font-semibold"
                      onClick={() => navigateAndScrollToTop(item.to)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-bold text-black mb-5 text-lg">Contact</h2>
            <p className="text-base text-blue-900 font-semibold mb-2">
              <a href="tel:(307)-216-4424" className="hover:text-blue-700 transition">
                Phone:(307)-216-4424
              </a>
            </p>
            <p className="text-base text-blue-900 font-semibold mb-2">
              <a href="mailto:support@v-edu.us" className="hover:text-blue-700 transition">
                Email: support@v-edu.us
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              1908 Thomes Ave STE 12363, Cheyenne, WY 82001
            </p>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-600 font-semibold">
          Copyright 2025 © V-EDU All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
