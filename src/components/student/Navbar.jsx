import React, { useContext, useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ jobsRef }) => {
  const location = useLocation();
  const { isEducator, setIsEducator, navigate } = useContext(AppContext);
  const { user } = useUser();

  // State for scroll direction
  const [atTop, setAtTop] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Prevent scroll effect when menu is open
      setAtTop(window.scrollY < 10);

      if (window.scrollY < window.innerHeight / 2) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Helper for navigation + scroll to top
  const handleNavClick = (to) => {
    navigate(to);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false); // for mobile menu
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleCoursesClick = () => navigate('/course-list');

  // Dropdown data for mobile
  const dropdowns = [
    {
      label: "Careers",
      items: [
        { to: "/careers/cyber", label: "Cyber Security & Ethical Hack" },
        { to: "/careers/data", label: "Data Science & AI" },
        { to: "/careers/cloud", label: "Cloud Computing & DevOps" },
        { to: "/careers/digital", label: "Digital Marketing & Growth" },
        { to: "/careers/fullstack", label: "Fullstack Software Dev" },
        { to: "/careers/uiux", label: "UI & UX Design" },
      ],
    },
    {
      label: "Why Choose Us",
      items: [
        { to: "/about", label: "Your Career Launchpad" },
        { to: "/apply", label: "Simple Enrollment Process" },
        { to: "/payments", label: "Flexible Payment Plans" },
        { to: "/contact", label: "Always Here to Help" },
        { to: "/job-openings", label: "Recent Job Openings" },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`
          fixed top-4 left-1/2 transform -translate-x-1/2 z-50
          transition-all duration-700
          ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}
          w-[98vw] max-w-7xl bg-white shadow-lg py-1
          rounded-full flex items-center
          border border-gray-200
        `}
        style={{
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          borderRadius: '32px',
          minHeight: '44px',
        }}
      >
        {/* Logo - left */}
        <div
          className="flex-shrink-0 flex items-center ml-6"
          style={{ flexBasis: '160px' }}
        >
          <img
            onClick={() => {
              navigate('/');
              scrollToTop();
            }}
            src={assets.logo}
            alt="Logo"
            className="cursor-pointer transition-all duration-700"
            style={{
              width: '70px',
              height: 'auto',
              objectFit: 'contain',
              marginRight: '8px',
            }}
          />
        </div>

        {/* Navigation Links - center (hidden on mobile) */}
        <div className="flex-1 flex justify-center items-center gap-6 font-sans text-base font-medium relative max-md:hidden">
          {/* Careers */}
          <div className="group relative">
            <button className="nav-link text-black relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
              Careers
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 min-w-[260px] border border-gray-100 z-50">
              <div className="flex flex-col gap-2">
                {/* Use button for navigation */}
                <button onClick={() => handleNavClick("/careers/cyber")} className="dropdown-item text-black">Cyber Security & Ethical Hack</button>
                <button onClick={() => handleNavClick("/careers/data")} className="dropdown-item text-black">Data Science & AI</button>
                <button onClick={() => handleNavClick("/careers/cloud")} className="dropdown-item text-black">Cloud Computing & DevOps</button>
                <button onClick={() => handleNavClick("/careers/digital")} className="dropdown-item text-black">Digital Marketing & Growth</button>
                <button onClick={() => handleNavClick("/careers/fullstack")} className="dropdown-item text-black">Fullstack Software Dev</button>
                <button onClick={() => handleNavClick("/careers/uiux")} className="dropdown-item text-black">UI & UX Design</button>
              </div>
            </div>
          </div>
          {/* Why Choose Us */}
          <div className="group relative">
            <button className="nav-link text-black relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
              Why Choose Us
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 min-w-[240px] border border-gray-100 z-50">
              <div className="flex flex-col gap-2">
                <button onClick={() => handleNavClick("/about")} className="dropdown-item text-black">Your Career Launchpad</button>
                <button onClick={() => handleNavClick("/apply")} className="dropdown-item text-black">Simple Enrollment Process</button>
                <button onClick={() => handleNavClick("/payments")} className="dropdown-item text-black">Flexible Payment Plans</button>
                <button onClick={() => handleNavClick("/contact")} className="dropdown-item text-black">Always Here to Help</button>
                <button onClick={() => handleNavClick("/job-openings")} className="dropdown-item text-black">Recent Job Openings</button>
              </div>
            </div>
          </div>
          {/* Resources */}
          <div className="group relative">
            <button className="nav-link text-black relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
              Resources
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 min-w-[220px] border border-gray-100 z-50">
              <div className="flex flex-col gap-2">
                <button onClick={() => handleNavClick("/resources/articles")} className="dropdown-item text-black">Articles & Insights</button>
                <button onClick={() => handleNavClick("/resources/webinars")} className="dropdown-item text-black">Webinars & Workshops</button>
                <button onClick={() => handleNavClick("/resources/guides")} className="dropdown-item text-black">Guides & Playbooks</button>
                <button onClick={() => handleNavClick("/resources/success")} className="dropdown-item text-black">Success Stories</button>
                <button onClick={() => handleNavClick("/resources/trends")} className="dropdown-item text-black">Industry Trends</button>
              </div>
            </div>
          </div>
          {/* V-EDU Times */}
          <Link
            to="/vedutimes"
            className="nav-link text-black relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            V-EDU Times
          </Link>
        </div>

        {/* Right section - buttons (hidden on mobile) */}
        <div className="flex items-center gap-2 mr-6 max-md:hidden" style={{ flexBasis: '180px' }}>
          <a
            href="tel:+18883444990"
            className="bg-blue-600 text-white px-4 py-1 font-bold shadow hover:bg-blue-700 transition rounded-full"
            style={{
              fontSize: '15px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              fontWeight: 600,
            }}
          >
            Call Us
          </a>
          <Link
            to="/lms-login"
            className="bg-blue-600 text-white px-4 py-1 font-bold shadow hover:bg-blue-700 transition rounded-full"
            style={{
              fontSize: '15px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              fontWeight: 600,
            }}
          >
            LMS
          </Link>
          {user && (
            <>
              <Link to="/my-enrollments" className="hover:text-blue-600 transition">My Enrollments</Link>
              <UserButton />
            </>
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto mr-4 p-2 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Fullscreen, fixed, closes only on cross or link click */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-40 md:hidden">
          <div className="fixed inset-0 bg-white h-full w-full shadow-2xl flex flex-col pt-8 pb-6 px-6">
            {/* Close button */}
            <button
              className="self-end mb-4 p-2 rounded-full bg-blue-50 border border-blue-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            {/* Menu buttons */}
            {dropdowns.map((dropdown, idx) => (
              <div key={dropdown.label} className="mb-2">
                <button
                  className="w-full text-left px-4 py-3 bg-blue-50 text-blue-900 font-bold rounded-lg mb-1 shadow hover:bg-blue-100 transition"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {dropdown.label}
                  <span className="float-right">{openDropdown === idx ? '▲' : '▼'}</span>
                </button>
                {openDropdown === idx && (
                  <div className="pl-2">
                    {dropdown.items.map(item => (
                      <button
                        key={item.to}
                        className="block px-4 py-2 text-blue-700 hover:bg-blue-50 rounded transition"
                        onClick={() => handleNavClick(item.to)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Call Us button */}
            <a
              href="tel:+18883444990"
              className="w-full mt-6 mb-2 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition text-center block"
              style={{ fontSize: '17px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;