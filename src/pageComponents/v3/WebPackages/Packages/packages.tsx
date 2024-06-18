
import React from "react";
import Link from "next/link";
import packagesData from "@data/package-data/package-data.json";

interface Addon {
	name: string;
	price: number;
	selected: boolean;
}

interface Package {
	id: number;
	title: string;
	price: number;
	idealFor: string;
	includes: string[];
	addons: Addon[];
	bgColor: string;
	imgSrc: string;
	buttonLabel: string;
	btnType: string;
	category: string;
	popular: boolean;
}

const Packages: React.FC = () => {
	const webPackages = packagesData.filter(p => p.category === "web");
	// const hostingPackages = packagesData.filter(p => p.category === "hosting");

	return (
		<section className="web-packages-section pt-[73px] pb-[79px] py-[60px]">
			<div className="custom-container">
				<div className="web-packages-wrapper grid grid-cols-12 sm:grid-cols-6 gap-6">
					{packagesData.map((plan, index) => (
						<div
							key={index}
							className={`packasges-card-item rounded col-span-6 flex flex-col p-2 ${plan.bgColor}`}>
							<header
								className="text-center relative mb-5 text-white p-[22px]"
								style={{
									backgroundImage: `url(/images/${plan.imgSrc})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}>
								<p className="mdp">
									Particular Lite <br />{" "}
									<span className="font-bold">{plan.title}</span>
								</p>
								<span className="block my-2">from</span>
								<h5 className="text-[24px] font-bold">£{plan.price}</h5>
								{plan.popular && (
									<div className="absolute top-2 right-2 text-[white] bg-[#026FEE] py-2 px-3 h-10 w-20 rounded-[96px]">
										Popular
									</div>
								)}
							</header>
							<div className="text-sm p-2">
								<div className="flex gap-6">
									<p>Ideal for:</p>
									<p className="!font-medium">{plan.idealFor}</p>
								</div>
								<div className="flex gap-8 mt-[41px]">
									<p className="underline">Includes*:</p>
									<ul className="!list-disc space-y-2 sm:ml-4">
										{plan.includes.map((item, idx) => (
											<li key={idx} className="!list-disc">
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="text-right mt-auto">
								<Link
									className={`btn flex items-center justify-center ml-auto w-[118px] ${plan.btnType}`}
									href={`/e-commerce/package-details?id=${plan.id}`}>
									{plan.buttonLabel}
								</Link>
							</div>
						</div>
					))}
				</div>
				{/* <h2>Hosting & Maintenance Packages</h2> */}
				{/* <div className="web-packages-wrapper grid grid-cols-12 sm:grid-cols-6 gap-6">
					{hostingPackages.map((plan, index) => (
						<div
							key={index}
							className={`packasges-card-item rounded col-span-6 flex flex-col p-2 ${plan.bgColor}`}>
							<header
								className="text-center relative mb-5 text-white p-[22px]"
								style={{
									backgroundImage: `url(/images/${plan.imgSrc})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}>
								<p className="mdp">
									Particular Lite <br />{" "}
									<span className="font-bold">{plan.title}</span>
								</p>
								<span className="block my-2">from</span>
								<h5 className="text-[24px] font-bold">{plan.price}</h5>
								{plan.popular && (
									<div className="absolute top-2 right-2 text-[white] bg-[#026FEE] py-2 px-3 h-10 w-20 rounded-[96px]">
										Popular
									</div>
								)}
							</header>
							<div className="text-sm p-2">
								<div className="flex gap-6">
									<p>Ideal for:</p>
									<p className="!font-medium">{plan.idealFor}</p>
								</div>
								<div className="flex gap-8 mt-[41px]">
									<p className="underline">Includes*:</p>
									<ul className="!list-disc space-y-2 sm:ml-4">
										{plan.includes.map((item, idx) => (
											<li key={idx} className="!list-disc">
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="text-right mt-auto">
								<Link
									className={`btn w-[118px] ${plan.btnType}`}
									href={`/package-details?id=${plan.id}`}
									legacyBehavior>
									{plan.buttonLabel}
								</Link>
							</div>
						</div>
					))}
				</div> */}
				<p className="package-note-text text-center mt-[46px] text-[14px] text-[#333] font-accent font-medium leading-[150%]">
					*Additional services are available to add to these packages.
				</p>
			</div>
		</section>
	);
};

export default Packages;
