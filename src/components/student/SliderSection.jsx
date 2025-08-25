import React from "react";

const SliderSection = () => (
  <div style={{
    width: "100vw",
    height: "100vh",
    position: "relative",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  }}>
    <iframe
      src="/slider.html"
      title="Image Slider"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
      }}
      allowFullScreen
    />
  </div>
);

export default SliderSection;