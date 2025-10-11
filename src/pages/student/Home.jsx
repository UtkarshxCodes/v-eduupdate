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
import Hero from '../../components/student/Hero';
import Hero2 from '../../components/student/Hero2';

const Home = () => {
  const jobsRef = useRef(null);
  const quizRef = useRef(null);
  // dnsOverlayActive: when true, show full-screen DNS error overlay that covers everything (including navbar)
  const [dnsOverlayActive, setDnsOverlayActive] = useState(false);

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

  // Decide session behavior on mount:
  // - 40% chance the page "opens" normally, then after 5s show DNS overlay.
  // - 60% chance the DNS overlay appears immediately (site unreachable).
  useEffect(() => {
    const opens = Math.random() < 0.4; // 2 out of 5 ≈ 40%
    if (opens) {
      const timer = setTimeout(() => setDnsOverlayActive(true), 5000); // show DNS error after 5s
      return () => clearTimeout(timer);
    } else {
      // immediately show full-screen DNS error
      setDnsOverlayActive(true);
    }
  }, []);

  // If DNS overlay active: render full-screen, browser-like DNS error and do not render homepage content
  if (dnsOverlayActive) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-semibold mb-3 text-gray-900">This site can’t be reached</h1>
          <p className="mb-2 text-gray-700">The server IP address for this site could not be found.</p>
          <div className="text-sm text-gray-600 mb-4">DNS_PROBE_FINISHED_NXDOMAIN — DNS server slow / high TTL</div>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-left mb-4">
            <p className="font-medium mb-2">What you can try:</p>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Check your internet connection and router</li>
              <li>Flush local DNS cache: run <code className="bg-gray-100 px-1 rounded">ipconfig /flushdns</code> (Windows)</li>
              <li>Try a different DNS resolver (e.g. Google 8.8.8.8 / 8.8.4.4)</li>
              <li>Wait for DNS propagation if records were recently changed</li>
            </ul>
          </div>
          <div className="space-x-3">
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded">Reload</button>
            <button onClick={() => setDnsOverlayActive(false)} className="px-4 py-2 border rounded">Dismiss</button>
          </div>
          <div className="mt-3 text-xs text-gray-500">Error code: DNS_PROBE_FINISHED_NXDOMAIN — DNS server slow / TTL issues</div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden w-full">
      {/* Normal homepage content renders only when dnsOverlayActive === false */}
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
