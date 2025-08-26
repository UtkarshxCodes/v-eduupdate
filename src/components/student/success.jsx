import React from "react";
import { AnimatedTestimonialsDemo } from "../ui/AnimatedTestimonialsDemo";
import Footer from "./Footer";
import { FlipWordsDemo } from "../ui/FlipWordsDemo";
import { HeroHighlightDemo } from "../ui/HeroHighlightDemo";


const Success = () => (
  <div style={{ background: "#fff", minHeight: "100vh", width: "100%", paddingTop: "120px" }}>
    <section className="mb-16">
         <HeroHighlightDemo />    
        <FlipWordsDemo />
      <AnimatedTestimonialsDemo />
    </section>
	
    <Footer />
  </div>
);

export default Success;