import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
  setIsDrawerOpen(!isDrawerOpen);
};
  return (
    <>
      <div className=" custom-container flex sm:hidden">
        <Link href="/">
          <Image
            src="/images/white-brand-logo.svg"
            alt="Logo"
            width="107"
            height="43"
          />
        </Link>
        <ul className=" text-text-extra-small flex flex-row gap-14 ml-[99px] mr-[75px]">
          <li className="!hover:[#026FEE]">
            <Link href="/">AGENCY</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">ABOUT US</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">PORTFOLIO</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">SERVICES</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">COLOUR CRAFT</Link>
          </li>
        </ul>
        <Link href="">
          {" "}
          <Image
            src="/images/uk.png"
            alt="Logo"
            width="169"
            height="21"
            className="object-contain"
          />
        </Link>
      </div>
      <div className=" relative my-4">
        <div className="flex justify-end !flex-row">
          <button
            className="mobo-trigger-menu-btn hidden sm:block"
            onClick={handleDrawerToggle}
          >
            <Image
              src="/images/icons/trigger-menu.svg"
              width="28"
              height="9"
              alt="header trigger btn icon"
            />
          </button>
        </div>
        <div
          className={`fixed flex flex-col p-10 z-[99999] top-0 right-0 h-screen w-full menu-bg text-white transition-transform duration-300 transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute right-7 top-4 p-3"
            onClick={handleDrawerToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path d="M1 1L20 20M1 20L20 1" stroke="white" strokeWidth="2" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4">
            <li className="hover:[#026FEE]">
              <Link href="/">AGENCY</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/">ABOUT US</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/">PORTFOLIO</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/">SERVICES</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/">COLOUR CRAFT</Link>
            </li>
            <Link href="">
              <Image
                src="/images/uk.png"
                alt="Logo"
                width="169"
                height="21"
                className="object-contain"
              />
            </Link>
          </ul>
          <button className="btn mt-16">Brand Assessment</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;