import React from "react";
import { TracingBeamDemo4 } from "../ui/TracingBeamDemo4";
import Footer from "./Footer";


const Trends = () => (
  <div style={{ background: "#fff", minHeight: "100vh", width: "100%", paddingTop: "120px" }}>
    <section className="mb-16">
      <TracingBeamDemo4 />
    </section>
	
    <Footer />
  </div>
);

export default Trends;