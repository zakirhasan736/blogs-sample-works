"use client";
import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/common/pre-loader/LoadingScreen";
import Footer from "@/components/component-v3/footer/footer";
import Navbar from "@/components/component-v3/navbar/navbar";
import { animatePageIn } from "@/utils/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    animatePageIn();
  }, []);

  useEffect(() => {
    const onLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var videoElements = document.querySelectorAll("video");

      videoElements.forEach(function (videoElement) {
        videoElement.controls = false;

        videoElement.addEventListener("play", function () {
          this.controls = false;
        });

        videoElement.addEventListener("pause", function () {
          this.controls = false;
        });
      });
    });
  }, []);

  return (
    <>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-0 w-screen"
      />
      {/* <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-3/4 w-1/4"
      /> */}
      <Navbar />
      <main className="pca-marketing-main-wraper">{children}</main>
      <Footer />
      {/* {!pageLoaded && (
				<LoadingScreen  />
			)} */}
    </>
  );
}
