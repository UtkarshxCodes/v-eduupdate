import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, useLocation, useMatch } from 'react-router-dom'
import Navbar from './components/student/Navbar'
import Home from './pages/student/Home'
import CourseDetails from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import 'quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Player from './pages/student/Player'
import MyEnrollments from './pages/student/MyEnrollments'
import Loading from './components/student/Loading'
import AboutUs from './components/student/Aboutus';
import ContactUs from './components/student/ContactUs';
import JobsList from './pages/student/JobsList';
import CourseRegistration from './components/student/CourseRegistration';
import LMSLoginPage from './pages/student/LMSLoginPage';
import LMSDashboard from './pages/student/LMSDashboard';
import QuizSection from './components/student/quiz';
import PrivacyPolicyPage from "./pages/student/PrivacyPolicyPage";
import ReturnPolicyPage from "./pages/student/ReturnPolicyPage";
import BookCall from './pages/student/book-call';
import Datapg from './pages/student/Datapg';
import Cloudpg from './pages/student/Cloudpg';
import Fullstackpg from './pages/student/Fullstackpg';
import Digitalpg from './pages/student/Digitalpg'
import Uiuxpg from './pages/student/Uiuxpg'
import VedutimesPage from "./pages/student/vedutimes";
import EnrollNowModal from './components/student/EnrollNowModal';
import PaymentsEnroll from './pages/student/PaymentsEnroll';
import JobPostingSection from './components/student/JobPostingSection';
import Apply from './components/student/apply';

const App = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  const isEducatorRoute = useMatch('/educator/*');
  const location = useLocation();
  const hideNavbar = isEducatorRoute || location.pathname === "/vedutimes";

  useEffect(() => {
    const handler = () => setShowEnrollModal(true);
    window.addEventListener('openEnrollNowModal', handler);
    return () => window.removeEventListener('openEnrollNowModal', handler);
  }, []);

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />
      {/* Hide Navbar for educator routes and vedutimes */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <Home
            showRegistration={showRegistration}
            setShowRegistration={setShowRegistration}
            formData={formData}
            setFormData={setFormData}
          />
        } />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/jobs" element={
          <JobsList
            showRegistration={showRegistration}
            setShowRegistration={setShowRegistration}
            formData={formData}
            setFormData={setFormData}
          />
        } />
        <Route path="/register" element={<CourseRegistration />} />
        <Route path="/lms-login" element={<LMSLoginPage />} />
        <Route path="/lms-dashboard" element={<LMSDashboard />} />
        <Route path="/quiz" element={<QuizSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
        <Route path="/careers/cyber" element={<BookCall />} />
        <Route path="/careers/data" element={<Datapg />} />
        <Route path="/careers/cloud" element={<Cloudpg />} />
        <Route path="/careers/fullstack" element={<Fullstackpg />} />
        <Route path="/careers/digital" element={<Digitalpg />} />
        <Route path="/careers/uiux" element={<Uiuxpg />} />
        <Route path="/vedutimes" element={<VedutimesPage />} />
        <Route path="/payments-enroll" element={<PaymentsEnroll />} />
        <Route path="/job-openings" element={<JobPostingSection />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <CourseRegistration
        isOpen={showRegistration}
        setIsOpen={setShowRegistration}
        formData={formData}
        setFormData={setFormData}
      />
      <EnrollNowModal isOpen={showEnrollModal} onClose={() => setShowEnrollModal(false)} />
    </div>
  )
}

export default App
