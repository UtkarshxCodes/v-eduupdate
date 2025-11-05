import React, { useRef, useEffect, useCallback } from 'react';
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

  return (
    <div className="overflow-x-hidden w-full">
      {/* Normal homepage content (DNS overlay removed) */}
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
