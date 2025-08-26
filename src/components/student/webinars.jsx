import React from "react";
import { TracingBeamDemo2 } from "../ui/TracingBeamDemo2";
import Footer from "./Footer";
import {TextRevealCardPreview} from "../ui/TextRevealCardPreview";


const Webinars = () => (
  <div style={{ background: "#fff", minHeight: "100vh", width: "100%", paddingTop: "120px" }}>
    <section className="mb-16">
      <TracingBeamDemo2 />
      <TextRevealCardPreview/>
    </section>
	
    <Footer />
  </div>
);

export default Webinars;