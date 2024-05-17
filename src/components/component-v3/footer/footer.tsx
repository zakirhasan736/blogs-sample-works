"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] pt-[110px] pb-[91px] sm:pt-[45px] sm:pb-[60px]">
      <div className="custom-container">
        <div className="footer-container">
          <div className="sm:mb-4">
            <Image src="/images/logo.svg" alt="logo" width={216} height={87} />
            <p>
              Our gift is observation, it just so happens we’re a marketing
              agency.
            </p>
            <Link href="/contacts">
              <button className="btn">Book a call</button>
            </Link>

            <div className="flex gap-[15px] mt-[60px]">
              <Link
                href="https://www.linkedin.com/company/byparticularagency/"
                target="_blank"
              >
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" />
              </Link>
              <Link
                href="https://www.google.com/search?q=particular+agency&rlz=1C5CHFA_enGB964GB964&oq=part&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRhBMgYIARBFGDsyBggCEEUYOTIGCAMQRRg7Mg0IBBAAGJIDGIAEGIoFMgYIBRBFGEEyBggGEEUYPDIGCAcQRRhB0gEIMzU3MWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                <img src="/images/google.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex gap-8 sm:flex-col">
            <div>
              <div className="footer-title">
                <h5>Location</h5>
              </div>
              <p className="sm:w-44">
                8 Cody Road, London, <br /> England, E16 4SR
              </p>
            </div>
            <div>
              <div className="footer-title">
                <h5>Services</h5>
              </div>
              <ul>
                <li>
                  <Link href="/services">Web &amp; App Development</Link>
                </li>
                <li>
                  <Link href="/services">PPC</Link>
                </li>
                <li>
                  <Link href="/services">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/services">Motion Design</Link>
                </li>
                <li>
                  <Link href="/services">SEO</Link>
                </li>
                <li>
                  <Link href="/services">Brand Identity</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-title">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  <Link className="hidden" href="/aboutus">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/features/colour-craft?colors=000000-ffffff-4685ff-f2f2f2-ffb084">
                    Colour Craft
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">Contact Us</Link>
                </li>

                <li>
                  <Link
                    href="https://assessments.particularagency.co.uk/marketing-strength"
                    target="_blank"
                  >
                    Brand Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy flex justify-between mt-10 sm:flex-col">
          <ul>
            <li>
              <Link href="/terms-and-condition">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
          <div className="text-right sm:text-left">
            <p>
              Copyright {new Date().getFullYear()} <br /> Particular Holdings
              (Registered in UK). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
