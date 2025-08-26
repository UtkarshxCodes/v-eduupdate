import React from "react";
import { MacbookScrollDemo } from "../../components/ui/MacbookScrollDemo";
import Hero from '../../components/student/Hero';
import Content from '../../components/student/content';
import { HeroHighlightDemo } from "../ui/HeroHighlightDemo";
import GuaranteeForm from './CountdownTimer'; // Import your form component
import Footer from '../../components/student/Footer';

const Apply = () => (
  <div style={{ paddingTop: "120px", paddingBottom: "40px", minHeight: "100vh", background: "#fff" }}>
    <MacbookScrollDemo />
    <Content />
    <Hero />
    <HeroHighlightDemo />
    <GuaranteeForm /> {/* This will render your form section here */}
    <Footer />
  </div>
);

export default Apply;