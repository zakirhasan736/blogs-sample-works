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
              Our gift is observation, it just so happens we’re a Marketing
              agency.
            </p>
            <Link href="/contacts">
              <button className="btn">Book a call</button>
            </Link>

            <div className="flex gap-[15px] mt-[60px]">
              <Link href="" target="_blank">
                <img src="/images/facebook.svg" alt="Facebook Icon" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/byparticularagency/"
                target="_blank"
              >
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" />
              </Link>
              <Link href="" target="_blank">
                <img src="/images/google.svg" alt="" />
              </Link>
              <Link href="" target="_blank">
                <img src="/images/x.svg" alt="X Icon" />
              </Link>
            </div>
          </div>
          <div className="flex gap-8 sm:flex-col">
            <div>
              <div className="footer-title">
                <h5>Location</h5>
              </div>
              <p>
                United Kingdom <br /> 8 Cody Road, London, <br /> England, E16
                4SR
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
                  <Link href="/case-studies">Colour Craft</Link>
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
