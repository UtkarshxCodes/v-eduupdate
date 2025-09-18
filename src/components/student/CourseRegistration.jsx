import React, { useState, useEffect } from "react";
import PaymentOptionsModal from "./PaymentOptionsModal";
import OneToOnePaymentModal from "./OneToOnePaymentModal";

const CourseRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showOneToOneModal, setShowOneToOneModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Countdown logic (4 days cycle)
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let expiry = localStorage.getItem("vedu_offer_end");
    expiry = expiry ? new Date(expiry) : null;
    if (!expiry || new Date() > expiry) {
      expiry = new Date();
      expiry.setDate(expiry.getDate() + 4);
      localStorage.setItem("vedu_offer_end", expiry);
    }

    const timer = setInterval(() => {
      const now = new Date();
      let distance = expiry - now;
      if (distance <= 0) {
        expiry = new Date();
        expiry.setDate(expiry.getDate() + 4);
        localStorage.setItem("vedu_offer_end", expiry);
        distance = expiry - now;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setShowPaymentOptions(true);
    } catch (error) {
      alert("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex justify-center items-center py-0 px-2">
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 w-full max-w-4xl md:max-w-5xl xl:max-w-6xl relative flex flex-col gap-8">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-2">
            Register for V-EDU Bootcamp
          </h1>
          {/* Offer Banner with Countdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-blue-700 to-cyan-500 rounded-xl px-4 py-3 sm:py-5 text-white shadow-md w-full">
            <span className="text-lg sm:text-2xl font-extrabold tracking-wide">
              🎉 Limited Time Offer - 25% OFF
            </span>
            <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0 text-base sm:text-xl font-bold items-center">
              <span className="inline-flex items-center gap-1">
                <span className="bg-white/20 rounded px-2 py-1">{timeLeft.days}d</span>
                <span>:</span>
                <span className="bg-white/20 rounded px-2 py-1">{timeLeft.hours}h</span>
                <span>:</span>
                <span className="bg-white/20 rounded px-2 py-1">{timeLeft.minutes}m</span>
                <span>:</span>
                <span className="bg-white/20 rounded px-2 py-1">{timeLeft.seconds}s</span>
              </span>
              <span className="ml-2 text-xs sm:text-sm font-normal">Hurry! Offer Valid till⏳</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-stretch mt-2">
            {/* Left: Info & Certificates */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Highlights */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3">Why Choose V-EDU?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">💼</span>
                    <span className="text-gray-800 font-medium">Job Guarantee – <span className="font-normal">Land a tech job in 10 months</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">📜</span>
                    <span className="text-gray-800 font-medium">Industry-Recognized Certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">🚀</span>
                    <span className="text-gray-800 font-medium">No IT background required – <span className="font-normal">Start from scratch</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">🤝</span>
                    <span className="text-gray-800 font-medium">100% Job Assistance & Career Coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">💰</span>
                    <span className="text-gray-800 font-medium">
                      Unlock earning potential up to{" "}
                      <span className="text-green-600 font-extrabold text-2xl align-middle">$89,000+</span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* Certificates */}
              <div className="flex gap-4 justify-center items-center mt-4 flex-wrap">
                <div className="flex flex-col items-center">
                  <img
                    src="/certificate1.png"
                    alt="Certificate 1"
                    className="rounded-xl shadow-lg border-2 border-blue-200"
                    style={{
                      width: "170px",
                      height: "130px",
                      objectFit: "contain",
                      display: "block"
                    }}
                  />
                  <span className="text-xs text-gray-600 mt-1">Microsoft Certification</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/certificate2.png"
                    alt="Certificate 2"
                    className="rounded-xl shadow-lg border-2 border-blue-200"
                    style={{
                      width: "170px",
                      height: "130px",
                      objectFit: "contain",
                      display: "block"
                    }}
                  />
                  <span className="text-xs text-gray-600 mt-1">V-EDU Certification</span>
                </div>
              </div>
            </div>
            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center space-y-4 w-full max-w-md mx-auto md:mx-0 mt-6 md:mt-0">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-400 outline-none"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-400 outline-none"
              />
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-400 outline-none bg-white"
              >
                <option value="">Select your course</option>
                <option value="Cybersecurity">Cybersecurity & Ethical Hacking</option>
                <option value="Data Science">Data Science & AI</option>
                <option value="DevOps">DevOps & Cloud</option>
                <option value="Fullstack Development">Fullstack Development</option>
                <option value="Digital Marketing">Digital Marketing & Growth</option>
                <option value="UI UX Design">UI/UX Design</option>
              </select>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-bold text-lg shadow hover:from-blue-700 hover:to-cyan-600 transition"
              >
                {loading ? "Registering..." : "Register & Continue"}
              </button>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow hover:from-indigo-700 hover:to-purple-600 transition mt-2"
                onClick={() => setShowOneToOneModal(true)}
              >
                One-to-One Register
              </button>
              {/* Footer note */}
              <div className="mt-4 text-center text-gray-500 text-xs">
                By registering, you agree to V-EDU’s <a href="#" className="underline">Privacy Policy</a> & <a href="#" className="underline">Terms of Use</a>.<br />
                Refunds available only before accessing course materials.
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Payment Options Modal */}
      <PaymentOptionsModal
        isOpen={showPaymentOptions}
        onClose={() => setShowPaymentOptions(false)}
      />
      {/* One-to-One Payment Modal */}
      <OneToOnePaymentModal
        isOpen={showOneToOneModal}
        onClose={() => setShowOneToOneModal(false)}
      />
    </>
  );
};

export default CourseRegistration;