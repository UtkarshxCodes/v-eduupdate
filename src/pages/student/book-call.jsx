import React from "react";
import Navbar from "../../components/student/Navbar";
import CyberFictionIframeSection from "../../components/CyberFictionIframeSection";

const BookCall = () => (
  <div style={{ minHeight: "100vh", background: "#000" }}>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // Lower than Navbar
        background: "#000",
      }}
    >
      <CyberFictionIframeSection />
    </div>
  </div>
);

export default BookCall;