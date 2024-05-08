import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname() || "/";

  const isPortfolioPage = pathname === "/portfolio" || pathname === "/services";

  const navColor = () => {
    if (isPortfolioPage) {
      return "text-[#181725]";
    } else {
      return "text-[#fff]";
    }
  };

  const btnColor = () => {
    if (isPortfolioPage) {
      return "!bg-[#181725] !text-[#fff]";
    } else if (pathname === "/") {
      return "!right-4";
    } else {
      return "!bg-[#fff] !text-[#181725]";
    }
  };

  const logoSrc = isPortfolioPage
    ? "/images/logo-black.svg"
    : "/images/logo.svg";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to conditionally render the UK image
  const renderUKImage = () => {
    if (pathname === "/") {
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
    <nav className="absolute py-[23px] md:px-4 z-[99999] w-full max-w-[1440px] mx-auto left-0 right-0">
      <div className="custom-container !max-w-[1306px] flex justify-between items-center md:hidden !mr-0">
        <Link href="/">
          <Image src={logoSrc} alt="Logo" width="107" height="43" />
        </Link>
        <ul
          className={`text-text-extra-small flex flex-row gap-14 ${navColor()}`}
        >
          <div className="relative">
            <Link href="/" className="text-[#026FEE]">
              AGENCY
            </Link>
            <ul className="absolute hidden bg-none text-[#026FEE]">
              <li>
                <Link
                  href="https://network.byparticular.com/"
                  target="_blank"
                  className="block"
                >
                  NETWORK
                </Link>
              </li>
            </ul>
          </div>
          <li className="hover:[#026FEE]">
            <Link href="/">ABOUT US</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/">COLOUR CRAFT</Link>
          </li>
          {renderUKImage()} {/* Conditionally render the UK image */}
        </ul>
        <button className={`btn ${btnColor()}  right-14 top-[23px]`}>
          Brand Assessment
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="relative hidden md:block">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logoSrc} alt="Logo" width="107" height="43" />
          </Link>
          <button
            className="mobo-trigger-menu-btn "
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
          className={`fixed flex flex-col p-10 z-[99999] top-0 right-0 h-screen max-w-[350px] w-full menu-bg text-white transition-transform duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
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
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/services">SERVICES</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/">COLOUR CRAFT</Link>
            </li>
          </ul>
          <button className="btn mt-16">Brand Assessment</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
