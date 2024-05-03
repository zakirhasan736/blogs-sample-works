import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname() || "/";

  const navColor = () => {
    if (pathname === "/portfolio") {
      return "text-[#181725]";
    } else {
      return "text-[#fff]";
    }
  };

  const btnColor = () => {
    if (pathname === "/portfolio") {
      return "!bg-[#181725] !text-[#fff] !right-[56px]";
    } else {
      return "!bg-[#fff] !text-[#181725]";
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to conditionally render the UK image
  const renderUKImage = () => {
    if (pathname !== "/portfolio") {
      return (
        <Link href="">
          <Image
            src="/images/uk.png"
            alt="UK Flag"
            width="169"
            height="21"
            className="object-contain"
          />
        </Link>
      );
    }
    return null; // Return null if on the /portfolio page
  };

  return (
    <nav className="absolute pt-10 z-[99999] w-full">
      <div className="custom-container flex justify-between sm:hidden">
        <Link href="/">
          <Image
            src="/images/white-brand-logo.svg"
            alt="Logo"
            width="107"
            height="43"
          />
        </Link>
        <ul
          className={`text-text-extra-small flex flex-row gap-14 ml-[99px] mr-[75px] ${navColor()}`}
        >
          <li className="text-[#026FEE]">
            <Link href="/">AGENCY</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">ABOUT US</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">SERVICES</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">COLOUR CRAFT</Link>
          </li>
        {renderUKImage()} {/* Conditionally render the UK image */}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="relative my-4">
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
        {/* Mobile Drawer Menu */}
        <div
          className={`fixed flex flex-col p-10 z-[99999] top-0 right-0 h-screen w-full menu-bg text-white transition-transform duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
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
            <li className="!hover-[#026FEE]">
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
          <button className="btn mt-16">Brand Assessment</button>
        </div>
      </div>

      {/* Button on Mobile */}
      <button
        className={`btn ${btnColor()} sm:hidden absolute right-4 top-[23px]`}
      >
        Brand Assessment
      </button>
    </nav>
  );
};

export default Navbar;
