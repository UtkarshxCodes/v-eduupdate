import React from "react";

const Cloudcom = () => (
  <section style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
    <iframe
      src="/Cloud.html"
      title="Cloud Computing"
      width="100%"
      height="100%"
      style={{
        border: "none",
        display: "block",
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
      }}
      allowFullScreen
    />
  </section>
);

export default Cloudcom