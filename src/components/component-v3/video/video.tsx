"use client";

import React from "react";

const VideoSec = () => {
  return (
    <div>
      <video
        src="/images/city.mp4"
        autoPlay={true}
        muted={true}
        playsInline={true}
        controls={false}
        loop={true}
      />
    </div>
  );
};

export default VideoSec;
