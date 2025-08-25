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

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);

      // Only hide navbar after scrolling half the viewport height
      if (window.scrollY < window.innerHeight / 2) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleCoursesClick = () => navigate('/course-list');

  return (
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
            width: '70px', // Larger logo
            height: 'auto',
            objectFit: 'contain',
            marginRight: '8px',
          }}
        />
      </div>

     {/* Navigation Links - center */}
     <div className="flex-1 flex justify-center items-center gap-6 font-sans text-base font-medium relative">

  {/* Careers */}
  <div className="group relative">
    <button className="nav-link text-black relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
      Careers
    </button>
    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 min-w-[260px] border border-gray-100 z-50">
      <div className="flex flex-col gap-2">
        <Link to="/careers/cyber" className="dropdown-item text-black">Cyber Security & Ethical Hack</Link>
        <Link to="/careers/data" className="dropdown-item text-black">Data Science & AI</Link>
        <Link to="/careers/cloud" className="dropdown-item text-black">Cloud Computing & DevOps</Link>
        <Link to="/careers/digital" className="dropdown-item text-black">Digital Marketing & Growth</Link>
        <Link to="/careers/fullstack" className="dropdown-item text-black">Fullstack Software Dev</Link>
        <Link to="/careers/uiux" className="dropdown-item text-black">UI & UX Design</Link>
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
        <Link to="/about" className="dropdown-item text-black">Your Career Launchpad</Link>
        <Link to="/apply" className="dropdown-item text-black">Simple Enrollment Process</Link>
        <Link to="/payments" className="dropdown-item text-black">Flexible Payment Plans</Link>
        <Link to="/contact" className="dropdown-item text-black">Always Here to Help</Link>
        <Link to="/job-openings" className="dropdown-item text-black">Recent Job Openings</Link>
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
        <Link to="/resources/articles" className="dropdown-item text-black">Articles & Insights</Link>
        <Link to="/resources/webinars" className="dropdown-item text-black">Webinars & Workshops</Link>
        <Link to="/resources/guides" className="dropdown-item text-black">Guides & Playbooks</Link>
        <Link to="/resources/success" className="dropdown-item text-black">Success Stories</Link>
        <Link to="/resources/trends" className="dropdown-item text-black">Industry Trends</Link>
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

      {/* Right section - buttons */}
      <div
        className="flex items-center gap-2 mr-6"
        style={{ flexBasis: '180px' }}
      >
        <a
          href="tel:+18883444990"
          className="text-blue-900 font-semibold hover:underline flex items-center gap-1 text-sm"
          style={{ whiteSpace: 'nowrap' }}
        >
          {/* Phone */}
        </a>
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
    </nav>
  );
};

export default Navbar;