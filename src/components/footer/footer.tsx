"use client";
import {
  ArrowDownIcons,
  InstagrameIcons,
  TwitterIcons,
  YoutubeIcons,
} from "@/icons";
import { Image, Link, useState } from "@packages/packages";
import BackToTop from "../elements/back-to-top-btn/back-to-top";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmty = (input: any) => (input === "" ? true : false);
    if (isEmty(email)) {
      setError("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Email should be a valid email address");
      return;
    }
    setError("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData.status === 200) {
        setEmail("");
        setSuccessMessage("Subcription Successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        console.error("EmailJS error:", responseData);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
		<footer className="footer-section bg-[#D9D9D9] w-full">
			<div className="custom-container relative">
				<BackToTop />
				<div className="footer-wrapper grid grid-cols-16 gap-5 pt-[57px] pb-[54px] sm:pt-[45px] sm:pb-[45px] sm:block max-w-[1330px] mx-auto">
					<div className="footer-left-widgets col-span-5 laptop-m:col-span-4 md:col-span-7 sm:mb-[40px] text-left">
						<Image
							width={336}
							height={95}
							src="/images/footer-brand-logo.svg"
							className="footer-brand-logo sm:hidden mb-1 sm:object-cover flex justify-start items-start w-[336px] md:w-[215px] sm:h-[48px] sm:mb-4"
							alt="footer brand logo image"
						/>
						<Image
							width={215}
							height={48}
							src="/images/footer-brand-logo.svg"
							className="footer-brand-logo mb-1 hidden sm:flex sm:object-cover justify-start items-start w-[336px] md:w-[215px] sm:h-[48px] sm:mb-4"
							alt="footer brand logo image"
						/>
						<p className="footer-decription-text max-w-[393px] text-neu-black-2 text-left text-body-text-4 font-primary font-medium leading-normal mb-0">
							Particular Agency. Entrusted to create fitness for purpose. In
							spaces where results, delivery and creativity truly matter.
						</p>
					</div>
					<div className="footer-second-widgets col-span-2 laptop-m:col-span-3 md:col-span-4 pt-[17px] mb-12  sm:pt-0">
						<h6 className="widgets-title mb-[17px] text-body-text text-left text-neu-black font-bold font-primary leading-none">
							Menu
						</h6>
						<ul className="footer-link-widgtes flex flex-col gap-[17px]">
							<li className="footer-link-widgets-items">
								<Link href="/" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Home
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link href="/case-studies" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Case Studies
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link href="/services" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Services
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link href="/our-approach" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Our Approach
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link
									href="/features/colour-craft"
									className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Features
									</span>
									<span className="w-[13] h-[13px]">
										<ArrowDownIcons />
									</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-third-widgets col-span-3 laptop-m:col-span-4 md:col-span-5 pt-[17px] sm:mb-[87px]  sm:pt-0">
						<h6 className="widgets-title mb-[17px] text-body-text text-left text-neu-black font-bold font-primary leading-none">
							Legals
						</h6>
						<ul className="footer-link-widgtes flex flex-col gap-[17px]">
							<li className="footer-link-widgets-items">
								<Link
									href="/terms-and-condition"
									className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Terms and Conditions
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link
									href="/privacy-policy"
									className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Privacy Policy
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link href="/faq" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										FAQ’s
									</span>
								</Link>
							</li>
							<li className="footer-link-widgets-items">
								<Link href="/articles/" className="flex items-center gap-1">
									<span className="link-text  text-[20px] text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">
										Articles
									</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-right-widgets col-span-6 laptop-m:col-span-5 md:col-span-12 pt-[17px] sm:pt-0">
						<div className="footer-right-widgets-top-text mb-[23px] flex items-center justify-between gap-5">
							<h4 className="footer-right-widgets-title sm:hidden text-neu-black text-left font-semibold font-primary leading-none text-[32px] md:text-[32px]">
								Lets Talk!
							</h4>
							{/* <ul className="socials-widgets flex items-center gap-3">
								<li className="socials-widgets-list-item w-[30px]">
									<Link href="/">
										<TwitterIcons />
									</Link>
								</li>
								<li className="socials-widgets-list-item w-[30px]">
									<Link href="/">
										<InstagrameIcons />
									</Link>
								</li>
								<li className="socials-widgets-list-item w-[30px]">
									<Link href="/">
										<YoutubeIcons />
									</Link>
								</li>
							</ul> */}
						</div>
						<form action="" className="cta-subs-widgets-form"></form>
						<div className="cta-subs-widgets relative sm:hidden">
							<input
								className="cta-input-fild w-full text-left focus:border-none focus:outline-0 text-neu-black capitalize text-18px font-medium font-primary leading-none h-16 px-11 py-[7px] laptop-m:pl-[22px]"
								type="email"
								name="email"
								placeholder="Enter your email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							{error && <p>{error}</p>}
							{success && !loading && <p>{success}</p>}
							<button
								type="button"
								onClick={handleSubmit}
								className="absolute top-0 right-0 z-50 subs-btn py-[39px] pr-[9px] pb-[7px] pl-[9px] bg-neu-blue h-16 flex justify-start items-end w-[133px] laptop-m:w-[110px]  text-left text-neu-white text-text-xs-small font-medium font-primary leading-none">
								{loading ? "Loading..." : "Suscribe"}
							</button>
						</div>
					</div>
				</div>
				<div className="footer-bottom-box pt-6 pb-10 border-t-[.5px] border-t-[#A0A0A0] max-w-[1330px] mx-auto">
					<p className="text-black text-left text-text-xs-small font-primary font-medium leading-none">
						© {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
