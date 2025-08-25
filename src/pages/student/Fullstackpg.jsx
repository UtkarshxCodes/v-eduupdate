import React from "react";
import Navbar from "../../components/student/Navbar";
import Fullstackdev from "../../components/Fullstackdev";

const Fullstackpg = () => (
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
      <Fullstackdev/>
    </div>
  </div>
);

export default Fullstackpg;