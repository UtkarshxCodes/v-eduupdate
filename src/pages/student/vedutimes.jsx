import React from "react";
import VedutimesIframeSection from "../../components/VedutimesIframeSection";

const VedutimesPage = () => (
  <div style={{ minHeight: "100vh", background: "#000" }}>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#000",
      }}
    >
      <VedutimesIframeSection />
    </div>
  </div>
);

export default VedutimesPage;