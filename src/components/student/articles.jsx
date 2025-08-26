import React from "react";
import { TracingBeamDemo } from "../ui/TracingBeamDemo";
import Footer from "./Footer";
import { PlaceholdersAndVanishInputDemo} from "../ui/PlaceholdersAndVanishInputDemo";

const Articles = () => (
  <div style={{ background: "#fff", minHeight: "100vh", width: "100%", paddingTop: "120px" }}>
    <section className="mb-16">
      <TracingBeamDemo />
    </section>
	<PlaceholdersAndVanishInputDemo/>
    <Footer />
  </div>
);

export default Articles;