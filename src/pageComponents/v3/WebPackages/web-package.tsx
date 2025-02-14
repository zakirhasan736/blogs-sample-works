import Link from "next/link";
import React from "react";
import Packages from "./Packages/packages";

const WebPackages = () => {
  return (
		<div className="web-packages-main-wrapper !p-0 !pt-24">
			<section className="banner-section h-screen flex justify-center items-center text-center">
				<div className="custom-container">
					<h1 className="h2">Particular Lite Web Packages</h1>
					<p className="mt-4 mdp">
						Experience a bespoke, cost-effective service that propels your brand
						to new heights.
					</p>
					<Link href="#packages">
						<button className="btn btn-dark mt-8">See packages</button>
					</Link>
				</div>
			</section>
			<section className="text-center pt-[97px] pb-[74px]">
				<div className="custom-container">
					<h3>Particular Lite Templated Websites</h3>
					<p className="my-4 max-w-[778px] mx-auto">
						Particular Lite's templated web packages is for companies seeking
						high-quality, professional websites without the hefty price tag.
						These packages offer expertly designed templates that are easy to
						customise, ensuring your brand looks polished and unique. With quick
						setup times and user-friendly interfaces, you can get your website
						up and running swiftly*, allowing you to focus on growing your
						business.
					</p>
					<span className="text-[14px] text-[#333333]">
						* Delivered to completion in 4-6 weeks subject to availability.
					</span>
				</div>
			</section>
			<section className="about-web-packages-section  bg-[#CBD7E3] py-[87px]">
				<div className="custom-container">
					<div className="about-web-package-wrap grid grid-cols-12 sm:grid-cols-6 gap-8">
						<div className="left-cont-bar col-span-6">
							<h3 className="title ">
								Why go for a Templated <br /> Website?
							</h3>
						</div>

						<div className="right-cont-bar col-span-6">
							<p>
								This is for businesses looking for a cost-effective and
								time-efficient solution. Templated websites offer a range of
								pre-designed layouts that are easy to customise, allowing
								businesses to quickly establish an online presence without the
								lengthy development process of a custom site.{" "}
							</p>
							<br />
							<p>
								This approach ensures professional design and functionality at a
								fraction of the cost, making it an ideal option for startups and
								small businesses aiming to launch swiftly and economically.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Packages />
			<section className="bg-[#CBD7E3] py-[71px] text-center">
				<div className="custom-container ">
					<h2>Want a custom website instead?</h2>
					<p className="mt-[11px] max-w-[620px] mx-auto">
						Specialist in designing bespoke digital strategies for brands across
						all sectors and companies across the globe.
					</p>
					<Link href="/contacts">
						<button className="btn btn-dark mt-8">Contact us</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default WebPackages;
