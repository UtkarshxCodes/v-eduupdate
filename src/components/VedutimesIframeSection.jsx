import React from "react";

const VedutimesIframeSection = () => (
  <section style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
    <iframe
      src="/vedutimes.html"
      title="V-EDU Times"
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

export default VedutimesIframeSection;