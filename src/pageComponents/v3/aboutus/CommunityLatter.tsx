"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const CommunityLatter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`community-latter-section bg-white fade-in ${isVisible ? "visible" : ""}`}
    >
      <div className="fade-bottom">
        <Image
          src="/images/community-latter-modal-image.png"
          alt="community latter sec modal image"
          width={1440}
          className="w-full h-[387px] object-cover object-top"
          height={387}
        />
      </div>
      <div className="custom-container">
        <div className="community-latter-cont-box pt-[105px] pb-[120px] py-20">
          <h4 className="title font-primary font-normal text-[24px] sm:text-[18px] md:text-[20px] text-center text-black leading-[160%] tracking-[1.2px] mb-8">
            A Letter to the Community at Particular
          </h4>
          <p className="desc body-regular-1 text-center mb-6 text-mono-100 mx-auto max-w-[766px] w-full">
            To our community at Particular and all of Humankind,
            <br className="!block" />
            <br className="!block" />
            This is a message, written and contributed directly by the
            Particular directors, and we extend our hand in wishing you the
            warmest welcome into the Particular community.
            <br className="!block" />
            <br className="!block" />
            Throughout a period of around 15 years, we saw that the social
            contract has been quite severely broken. This dates as far back as
            the 2008 financial crisis.
          </p>
          <p className="desc body-regular-1 text-center mb-6 text-mono-100 mx-auto max-w-[766px] w-full ">
            There’s a disconnect between expectations and experiences. Your
            lived experience. Your product experiences. Your service
            experiences. Your community experiences, and so on.
          </p>
          <p className="desc body-regular-1 text-center text-mono-100 mx-auto max-w-[766px] w-full">
            So we exist to rid the world of the problem - the issue that is
            underwhelming human experience. In whatever forms it may take,
            starting with business and commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityLatter;
