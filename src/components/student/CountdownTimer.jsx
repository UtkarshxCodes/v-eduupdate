import React, { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = Math.max(0, targetDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex gap-4 justify-center md:justify-start mb-4">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-700">{timeLeft.days}</span>
        <span className="text-xs text-neutral-500">days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-700">{timeLeft.hours}</span>
        <span className="text-xs text-neutral-500">hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-700">{timeLeft.minutes}</span>
        <span className="text-xs text-neutral-500">minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-700">{timeLeft.seconds}</span>
        <span className="text-xs text-neutral-500">seconds</span>
      </div>
    </div>
  );
}

const targetDate = new Date("2025-08-31T23:59:59");

const GuaranteeForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = "tel:+18883444990";
  };

  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-white">
          <h2 className="text-2xl md:text-4xl font-bold text-[#142d4f] mb-4">
🎉 Limited Time Offer      - <span className="bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent"> 35% OFF</span> V-edu bootcamp
          </h2>
          <CountdownTimer targetDate={targetDate} />
          <ul className="mb-8 space-y-2">
            <li className="flex items-center gap-2 text-lg text-[#142d4f]">
              <span className="text-green-600 font-bold">✔</span> Job Guarantee – Land a tech job in 10 months.
            </li>
            <li className="flex items-center gap-2 text-lg text-[#142d4f]">
              <span className="text-green-600 font-bold">✔</span> No IT background required – Start from scratch.
            </li>
            <li className="flex items-center gap-2 text-lg text-[#142d4f]">
              <span className="text-green-600 font-bold">✔</span> 100% Job Assistance.
            </li>
          </ul>
          <div className="text-sm text-neutral-700 mb-2">
            <strong>Get into tech & Unlock earning potential up to $100K with V-EDU’s career support.</strong>
            <ol className="list-decimal ml-4 mt-2">
              <li>Graduate and complete our included career prep and coaching programs</li>
              <li>Apply to relevant jobs and stay in touch with your career coach</li>
              <li>From learning to earning—V-EDU is with you every step.</li>
            </ol>
            <div className="mt-2 font-bold text-blue-700">
At V-EDU, we stand by the quality of our programs.</div>
            <div className="text-xs text-neutral-500">Transparency First – No hidden conditions. Everything is clearly outlined in our Terms of Use.</div>
            <div className="mt-2 font-bold text-blue-700">We also have a fair refund policy</div>
            <div className="text-xs text-neutral-500">
             Refund Policy
 Once you access our LMS and course materials, refunds are not applicable. However, if you choose to withdraw before starting, you may be eligible for a refund as per our Terms of Use.
            </div>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="flex-1 p-8 bg-white flex flex-col justify-center items-center">
          <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-6" onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-2 text-sm text-blue-700 font-semibold">
              <span className="bg-blue-100 px-2 py-1 rounded">1</span> Contact details
              <span className="bg-blue-100 px-2 py-1 rounded">2</span> Call booking
            </div>
            <label className="block mb-2 font-medium text-[#142d4f]">First and last name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your name"
            />
            <label className="block mb-2 font-medium text-[#142d4f]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="you@email.com"
            />
            <label className="block mb-2 font-medium text-[#142d4f]">Phone number</label>
            <div className="flex mb-4">
              <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l">+1</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-r focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="888-344-4990"
              />
            </div>
            <label className="flex items-center mb-4 text-xs text-neutral-700">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I consent to marketing calls and text messages, including those made with an autodialed or artificial voice messages. Message and data rates may apply. Unsubscribe anytime per our Privacy Policy. Consent is not a condition of purchase.
            </label>
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold text-xl bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 text-white shadow-lg hover:scale-105 transition"
            >
              Continue
            </button>
            <div className="text-xs text-neutral-500 mt-2">
By clicking Continue, you agree to V-EDU’s Privacy Policy and Terms of Use.
            </div>
            <div className="text-xs text-neutral-500 mt-2">
            Discount applies to our programs in Data Science, AI & Automation, Cyber Security & Ethical Hacking, Cloud & DevOps, and Full-Stack Development.
Book a call before 11:59 PM IST on August 31st, 2025 to qualify for the promotion.
This offer is available to new students enrolling with upfront or installment payment options.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeForm;