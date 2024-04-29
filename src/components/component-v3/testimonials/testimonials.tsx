"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";


const TestimonialSec = () => {

	return (
    <section className="testimonials bg-[#fff] text-[#181725] pt-[101px] pb-[48px]">
      <div className="custom-container">
        <div>
          <div className="flex gap-10">
            <h2 className="text-[#181725]">Testimonials</h2>
            <p>
              Our clients have amazing things to say about Particular. Read what{" "}
              <br />
              they have to say.
            </p>
          </div>
          <button>Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
