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
  const triggerImg = isPortfolioPage ? "bar2.svg" : "bar.svg";
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
            src="/images/uk.svg"
            alt="UK Flag"
            width="169"
            height="21"
            className="object-contain hidden"
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
          <div className="relative network">
            <Link href="/" className="text-[#026FEE]">
              AGENCY
            </Link>
            <ul className="absolute hidden bg-none text-[#AE8651]">
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
          <li className="hover:[#026FEE] hidden">
            <Link href="/">ABOUT US</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="hover:[#026FEE]">
            <Link href="/case-studies">COLOUR CRAFT</Link>
          </li>
          {renderUKImage()} {/* Conditionally render the UK image */}
        </ul>
        <Link
          href="https://assessments.particularagency.co.uk/marketing-strength"
          target="_blank"
        >
          <button className={`btn ${btnColor()}  right-14 top-[23px]`}>
            Brand Assessment
          </button>
        </Link>
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
              src={`/images/${triggerImg}`}
              width="28"
              height="9"
              alt="header trigger btn icon"
            />
          </button>
        </div>
        {/* Mobile Drawer Menu */}
        <div
          className={`fixed flex flex-col p-10 z-[99999] top-0 right-0 h-screen w-full bg-[#1a1a1a] text-white transition-transform duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute right-7 top-4 p-3"
            onClick={handleDrawerToggle}
          >
            <Image src="/images/close.svg" alt="Close" width={24} height={24} />
          </button>
          <ul className="flex flex-col space-y-[34px] mt-[90px]">
            <div className="relative network">
              <Link href="/" className="text-[#026FEE]">
                AGENCY
              </Link>
              <ul className="absolute hidden bg-none text-[#AE8651]">
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
            <li className="hover:[#026FEE] hidden">
              <Link href="/">ABOUT US</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/services">SERVICES</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link href="/case-studies">COLOUR CRAFT</Link>
            </li>
            <li className="hover:[#026FEE]">
              <Link
                href="https://assessments.particularagency.co.uk/marketing-strength"
                target="_blank"
                className="underline"
              >
                BRAND STRENGTH ASSESSMENT
              </Link>
            </li>
          </ul>
          <div className="mt-24">
            <Image
              src="/images/mobile-logo.svg"
              alt="logo"
              width={130}
              height={52}
            />
            <p className="mb-6">
              Our gift is observation, it just so happens we’re a Marketing
              agency.
            </p>
            <Link href="/contacts">
              <button className="btn">Book a call</button>
            </Link>

            <div className="flex gap-[15px] mt-[45px]">
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
            <div className="copy mt-10">
              <ul>
                <li className="mb-2">
                  <Link href="/terms-and-condition">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
