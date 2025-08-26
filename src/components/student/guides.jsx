import React from "react";
import { TracingBeamDemo3 } from "../ui/TracingBeamDemo3";
import Footer from "./Footer";
import {TextGenerateEffectDemo} from "../ui/TextGenerateEffectDemo";


const Guides = () => (
  <div style={{ background: "#fff", minHeight: "100vh", width: "100%", paddingTop: "120px" }}>
    <section className="mb-16">
      <TracingBeamDemo3 />
      <TextGenerateEffectDemo/>
    </section>
	
    <Footer />
  </div>
);

export default Guides;