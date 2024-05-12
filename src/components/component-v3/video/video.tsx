"use client";

import React from "react";

const VideoSec = () => {
  return (
    <div>
      <video autoPlay={true} muted loop>
        <source src="/images/city.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSec;
