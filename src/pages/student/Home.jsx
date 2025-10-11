import React, { useRef, useEffect, useCallback, useState } from 'react';
import Footer from '../../components/student/Footer';
import SheryIframe from '../../components/student/SheryIframe';
import { HeroParallaxDemo } from '../../components/ui/HeroParallaxDemo';
import { HeroHighlightDemo } from '../../components/ui/HeroHighlightDemo';
import { CoverDemo } from '../../components/ui/CoverDemo';
import { ThreeDCardDemo } from '../../components/ui/ThreeDCardDemo';
import { FloatingDockDemo } from '../../components/ui/FloatingDockDemo';
import { TimelineDemo } from '../../components/ui/TimelineDemo';
import { DraggableCardDemo } from '../../components/ui/DraggableCardDemo';
import { AnimatedTestimonialsDemo } from '../../components/ui/AnimatedTestimonialsDemo';
import { FlipWordsDemo } from '../../components/ui/FlipWordsDemo';
import SliderSection from '../../components/student/SliderSection';
import { ThreeDCardDemo2 } from '../../components/ui/ThreeDCardDemo2';
import { ThreeDCardDemo3 } from '../../components/ui/ThreeDCardDemo3';
import Hero from '../../components/student/Hero'; // <-- Add this import
import Hero2 from '../../components/student/Hero2';

const Home = () => {
  const jobsRef = useRef(null);
  const quizRef = useRef(null);
  const [showDnsBanner, setShowDnsBanner] = useState(false);
  const [intermittentMsg, setIntermittentMsg] = useState(null);

  // Memoized scroll handlers
  const scrollToJobs = useCallback(() => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToQuiz = useCallback(() => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scrollToJobsSection', scrollToJobs);
    window.addEventListener('scrollToQuizSection', scrollToQuiz);
    return () => {
      window.removeEventListener('scrollToJobsSection', scrollToJobs);
      window.removeEventListener('scrollToQuizSection', scrollToQuiz);
    };
  }, [scrollToJobs, scrollToQuiz]);

  // Show DNS banner after 2 hours (for quick testing set to 10000)
  useEffect(() => {
    const TWO_HOURS_MS = 2 * 60 * 60 * 1000;
    const timer = setTimeout(() => setShowDnsBanner(true), TWO_HOURS_MS);
    return () => clearTimeout(timer);
  }, []);

  // After banner shows, occasionally display an intermittent DNS message
  useEffect(() => {
    if (!showDnsBanner) return;
    const interval = setInterval(() => {
      if (Math.random() < 0.25) { // 25% chance every 15s
        setIntermittentMsg('Intermittent DNS: DNS server slow or high TTL');
        setTimeout(() => setIntermittentMsg(null), 5000);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [showDnsBanner]);

  return (
    <div className="overflow-x-hidden w-full">
      {showDnsBanner && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-md p-4 shadow-md flex justify-between items-start">
            <div className="text-left">
              <strong>DNS Notice</strong>
              <div className="mt-2 text-sm">
                The site may be intermittently unreachable due to DNS issues. Common causes:
                <ul className="list-disc ml-5 mt-2">
                  <li><strong>DNS_PROBE_FINISHED_NXDOMAIN</strong> — missing/incorrect DNS record (site unreachable)</li>
                  <li><strong>DNS server not responding</strong> — resolver or authoritative nameserver down</li>
                  <li><strong>High Latency / Timeouts</strong> — slow resolver or high TTL</li>
                  <li><strong>Mixed Content / Cert errors</strong> — incorrect A/AAAA record causing cert mismatch</li>
                </ul>
                <div className="mt-2 text-xs text-gray-700">Sometimes the homepage opens but then shows errors like "DNS server slow" or "high TTL".</div>
              </div>
            </div>
            <div className="ml-4">
              <button onClick={() => setShowDnsBanner(false)} className="text-sm text-yellow-800 underline">Dismiss</button>
            </div>
          </div>
        </div>
      )}

      {intermittentMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded shadow">
          {intermittentMsg}
        </div>
      )}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Mobile view */}
        <div className="block md:hidden flex flex-col items-center space-y-7 text-center">
          <Hero2 />
          <SheryIframe />
          <TimelineDemo />
          <FlipWordsDemo />
          <AnimatedTestimonialsDemo />
          <CoverDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo2 />
          <ThreeDCardDemo3 />
          <HeroHighlightDemo />
          <FloatingDockDemo />
        </div>
        {/* Desktop view */}
        <div className="hidden md:flex flex-col items-center space-y-7 text-center">
          <SheryIframe />
          <HeroParallaxDemo />
          <SliderSection />
          <TimelineDemo />
          <FlipWordsDemo />
          <AnimatedTestimonialsDemo />
          <CoverDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo2 />
          <ThreeDCardDemo3 />
          <HeroHighlightDemo />
          <FloatingDockDemo />
        </div>
      </div>
      <DraggableCardDemo />
      <Footer />
    </div>
  );
};

export default Home;
