import GlowButton from "@/components/elements/button/glow-button";
import { Link, Image } from "@packages/packages";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const OurStorySection = () => {
  useEffect(() => {
    const section = document.querySelector(".our-story");

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnterBack: () => {
          gsap.fromTo(
            section,
            {
              backgroundColor: "#f8f9f7",
              duration: 0.1,
              ease: "power2.inOut",
            },
            {
              backgroundColor: "#000000",
              duration: 0.2,
              ease: "power2.inOut",
              onComplete: () => {
                section.classList.add("dark-mode");
                section.classList.remove("light-mode");
              },
            }
          );
        },
        onEnter: () => {
          gsap.fromTo(
            section,
            {
              backgroundColor: "#f8f9f7",
              duration: 0.1,
              ease: "power2.inOut",
            },
            {
              backgroundColor: "#000000",
              duration: 0.2,
              ease: "power2.inOut",
              onComplete: () => {
                section.classList.add("dark-mode");
                section.classList.remove("light-mode");
              },
            }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            section,
            { backgroundColor: "#000000", duration: 0.1, ease: "power2.inOut" },
            {
              backgroundColor: "#f8f9f7",
              duration: 0.2,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.fromTo(
                  section,
                  {
                    backgroundColor: "#f8f9f7",
                    duration: 0.2,
                    ease: "power2.inOut",
                  },
                  {
                    backgroundColor: "#f8f9f7", // Dark mode color
                    duration: 0.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                      section.classList.remove("dark-mode");
                      section.classList.add("light-mode");
                    },
                  }
                );
              },
            }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            section,
            { backgroundColor: "#000000", duration: 0.1, ease: "power2.inOut" },
            {
              backgroundColor: "#f8f9f7",
              duration: 0.2,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.fromTo(
                  section,
                  {
                    backgroundColor: "#f8f9f7",
                    duration: 0.2,
                    ease: "power2.inOut",
                  },
                  {
                    backgroundColor: "#f8f9f7", // Dark mode color
                    duration: 0.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                      section.classList.remove("dark-mode");
                      section.classList.add("light-mode");
                    },
                  }
                );
              },
            }
          );
        },
      },
    });
  }, []);
  return (
    <section className="our-story pt-[104px] pb-[50px] light-mode">
      <div className="custom-container max-w-[1220px]">
        <div className="comon-title mb-4">
          <h2 className="mb-2">Our Story</h2>
          <span></span>
        </div>
        <div className="our-story-main-cont flex md:flex-col gap-10">
          <Image
            width={559}
            height={400}
            className="rounded-[6px] w-full object-cover mb-4 h-[568px]"
            src="/images/our-story-img.png"
            alt="our story modal image"
          />

          <div className="our-story-text-cont self-center">
            <p className="description mb-2">
              Particular Agency has evolved over 15 years, stemming from a group
              of visionary individuals who recognised the prevalence of
              low-quality digital experiences.
            </p>
            <br />
            <p className="description mb-2">
              Our team has since grown into a dedicated cohort of seasoned
              professionals committed to tackling this challenge. With each
              project, we leverage our expertise, dedication, and unique
              Particular philosophy to craft exceptional digital solutions.
            </p>
            <br />
            <p className="description mb-8">
              Join us on this journey to elevate your digital presence to new
              heights..
            </p>

            <div className="story-btn-box flex items-center gap-8 flex-row">
              <Link href="/about" className="inline-block glow-btn-outline">
                <GlowButton glowBtnText="About Us" />
              </Link>
              <Link href="/contacts" className="inline-block">
                <GlowButton glowBtnText="Speak with us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
