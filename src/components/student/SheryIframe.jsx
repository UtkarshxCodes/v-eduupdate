import React from "react";

const SheryIframe = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        border: "none",
        overflow: "hidden",
      }}
      className="shery-iframe-container"
    >
      <iframe
        src="/Shery.html"
        title="Shery Visual Section"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
      />
      <style>
        {`
          @media (max-width: 600px) {
            .shery-iframe-container {
              height: auto !important;
              aspect-ratio: 16/9;
              max-width: 100vw;
            }
            .shery-iframe-container iframe {
              position: static !important;
              width: 100% !important;
              height: 100% !important;
              aspect-ratio: 16/9 !important;
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SheryIframe;