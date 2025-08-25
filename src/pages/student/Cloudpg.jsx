import React from "react";
import Navbar from "../../components/student/Navbar";
import Cloudcom from "../../components/Cloudcom";

const Cloudpg = () => (
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
      <Cloudcom/>
    </div>
  </div>
);

export default Cloudpg;