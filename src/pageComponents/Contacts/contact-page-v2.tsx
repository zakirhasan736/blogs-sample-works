"use client";
import { Link } from "@packages/packages";
import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import PivacyCheckmark from "./PivacyCheckmark";
import SendStatesLoader from "./SendStatesLoader";
import InputCountryNumberSelect from "@/components/elements/country-select/input-country-number-select";
import SelectItemWithSearch from "@/components/elements/dropdown/select-item-with-search";

interface ApiResponse<T> {
	message: string;
	data: T;
	status: number;
}
interface ServiceType {
	id: string;
	label: string;
}
interface IndustryType {
	id: string;
	label: string;
}
interface InvestmentRabgeType {
	id: string;
	label: string;
}
interface ObjectiveType {
	id: string;
	label: string;
}
const serviceTypes: ServiceType[] = [
	{ id: "webDesign", label: "Web Design and Development" },
	{ id: "visualMedia", label: "Visual Media" },
	{ id: "branding", label: "Branding" },
	{ id: "seo", label: "SEO" },
	{ id: "ppc", label: "PPC" },
	{ id: "socialMedia", label: "Social Media" },
];
const industryTypes: IndustryType[] = [
	{ id: "Accounting", label: "Accounting" },
	{ id: "AerospaceAviation", label: "Aerospace Aviation" },
	{ id: "AirlinesAviation", label: "Airlines / Aviation" },
	{
		id: "AlternativeDisputeResolution",
		label: "Alternative Dispute Resolution",
	},
	{ id: "AlternativeMedicine", label: "Alternative Medicine" },
	{ id: "Animation", label: "Animation" },
	{ id: "ApparelFashion", label: "Apparel & Fashion" },
	{ id: "ArchitecturePlanning", label: "Architecture & Planning" },
	{ id: "ArtsCrafts", label: "Arts & Crafts" },
	{ id: "Automotive", label: "Automotive" },
	{ id: "Banking", label: "Banking" },
	{ id: "Biotechnology", label: "Biotechnology" },
	{ id: "BroadcastMedia", label: "Broadcast Media" },
	{ id: "BuildingMaterials", label: "Building Materials" },
	{ id: "BusinessSuppliesEquipment", label: "Business Supplies & Equipment" },
	{ id: "CapitalMarkets", label: "Capital Markets" },
	{ id: "Chemicals", label: "Chemicals" },
	{ id: "CivicSocialOrganisation", label: "Civic & Social Organisation" },
	{ id: "CivilEngineering", label: "Civil Engineering" },
	{
		id: "ComputerSecurityNetworkSecurity",
		label: "Computer Security and Network Security",
	},
	{ id: "ComputerGames", label: "Computer Games" },
	{ id: "ComputerHardware", label: "Computer Hardware" },
	{ id: "ComputerNetworking", label: "Computer Networking" },
	{ id: "ComputerSoftware", label: "Computer Software" },
	{ id: "Construction", label: "Construction" },
	{ id: "ConsumerElectronics", label: "Consumer Electronics" },
	{ id: "ConsumerServices", label: "Consumer Services" },
	{ id: "Cosmetics", label: "Cosmetics" },
	{ id: "Dairy", label: "Dairy" },
	{ id: "DefenceSpace", label: "Defence and Space" },
	{ id: "Design", label: "Design" },
	{ id: "EducationManagement", label: "Education Management" },
	{ id: "Elearning", label: "E-learning" },
	{ id: "ElectricalManufacturing", label: "Electrical manufacturing" },
	{ id: "Entertainment", label: "Entertainment" },
	{ id: "EnvironmentalScience", label: "Environmental Science" },
	{ id: "EnvironmentalServices", label: "Environmental Services" },
	{ id: "EventsServices", label: "Events Services" },
	{ id: "ExecutiveOffice", label: "Executive Office" },
	{ id: "FacilitiesServices", label: "Facilities Services" },
	{ id: "FamilyServices", label: "Family Services" },
	{ id: "Farming", label: "Farming" },
	{ id: "FinancialServices", label: "Financial Services" },
	{ id: "FineArt", label: "Fine Art" },
	{ id: "Fishery", label: "Fishery" },
	{ id: "FoodBeverages", label: "Food & Beverages" },
	{ id: "FoodProduction", label: "Food Production" },
	{ id: "FundRaising", label: "Fund-Raising" },
	{ id: "Furniture", label: "Furniture" },
	{ id: "GamblingCasinos", label: "Gambling & Casinos" },
	{ id: "GlassCeramicsConcrete", label: "Glass, Ceramics & Concrete" },
	{ id: "GovernmentAdministration", label: "Government Administration" },
	{ id: "GovernmentRelations", label: "Government Relations" },
	{ id: "GraphicDesign", label: "Graphic Design" },
	{ id: "HealthWellnessFitness", label: "Health, Wellness & Fitness" },
	{ id: "HigherEducation", label: "Higher Education" },
	{ id: "HospitalHealthCare", label: "Hospital & Health Care" },
	{ id: "Hospitality", label: "Hospitality" },
	{ id: "HumanResources", label: "Human Resources" },
	{ id: "ImportExport", label: "Import & Export" },
	{ id: "IndividualServices", label: "Individual Services" },
	{ id: "IndustrialAutomation", label: "Industrial Automation" },
	{ id: "InformationServices", label: "Information Services" },
	{
		id: "InformationTechnologyServices",
		label: "Information Technology Services",
	},
	{ id: "Insurance", label: "Insurance" },
	{ id: "InternationalAffairs", label: "International Affairs" },
	{
		id: "InternationalTradeDevelopment",
		label: "International Trade & Development",
	},
	{ id: "InvestmentBanking", label: "Investment Banking" },
	{ id: "InvestmentManagement", label: "Investment Management" },
	{ id: "Judiciary", label: "Judiciary" },
	{ id: "LawEnforcement", label: "Law Enforcement" },
	{ id: "LegalServices", label: "Legal Services" },
	{ id: "LegislativeOffice", label: "Legislative Office" },
	{ id: "LeisureTravelTourism", label: "Leisure, Travel & Tourism" },
	{ id: "Libraries", label: "Libraries" },
	{ id: "LogisticsSupplyChain", label: "Logistics & Supply Chain" },
	{ id: "LuxuryGoodsJewellery", label: "Luxury Goods & Jewellery" },
	{ id: "Machinery", label: "Machinery" },
	{ id: "ManagementConsulting", label: "Management Consulting" },
	{ id: "Maritime", label: "Maritime" },
	{ id: "MarketResearch", label: "Market Research" },
	{ id: "MarketingAdvertising", label: "Marketing & Advertising" },
	{
		id: "MechanicalIndustrialEngineering",
		label: "Mechanical or Industrial Engineering",
	},
	{ id: "MediaProduction", label: "Media Production" },
	{ id: "MedicalDevices", label: "Medical Devices" },
	{ id: "MedicalPractices", label: "Medical Practices" },
	{ id: "MentalHealthCare", label: "Mental Health Care" },
	{ id: "Military", label: "Military" },
	{ id: "MiningMetals", label: "Mining Metals" },
	{ id: "MotionPicturesFilm", label: "Motion Pictures & Film" },
	{ id: "MuseumsInstitutions", label: "Museums & Institutions" },
	{ id: "Music", label: "Music" },
	{ id: "Nanotechnology", label: "Nanotechnology" },
	{ id: "Newspapers", label: "Newspapers" },
	{ id: "NonprofitOrganisation", label: "Non-profit Organisation" },
	{ id: "OilEnergy", label: "Oil & Energy" },
	{ id: "OnlineMedia", label: "Online Media" },
	{ id: "OutsourcingOffshoring", label: "Outsourcing & Offshoring" },
	{ id: "PackageFreightDelivery", label: "Package & Freight Delivery" },
	{ id: "PackagingContainers", label: "Packaging & Containers" },
	{ id: "PaperProducts", label: "Paper Products" },
	{ id: "PerformingArts", label: "Performing Arts" },
	{ id: "Pharmaceuticals", label: "Pharmaceuticals" },
	{ id: "Philanthropy", label: "Philanthropy" },
	{ id: "Photography", label: "Photography" },
	{ id: "Plastics", label: "Plastics" },
	{ id: "PoliticalOrganisation", label: "Political Organisation" },
	{ id: "PrimarySecondaryEducation", label: "Primary and Secondary Education" },
	{ id: "Printing", label: "Printing" },
	{
		id: "ProfessionalTrainingCoaching",
		label: "Professional Training & Coaching",
	},
	{ id: "ProgramDevelopment", label: "Program Development" },
	{ id: "PublicPolicy", label: "Public Policy" },
	{
		id: "PublicRelationsCommunications",
		label: "Public Relations & Communications",
	},
	{ id: "PublicSafety", label: "Public Safety" },
	{ id: "Publishing", label: "Publishing" },
	{ id: "RailroadManufacture", label: "Railroad Manufacture" },
	{ id: "Ranching", label: "Ranching" },
	{ id: "RealEstate", label: "Real Estate" },
	{
		id: "RecreationalFacilitiesServices",
		label: "Recreational Facilities & Services",
	},
	{ id: "ReligiousInstitutions", label: "Religious Institutions" },
	{ id: "Renewables", label: "Renewables" },
	{ id: "Research", label: "Research" },
	{ id: "Restaurants", label: "Restaurants" },
	{ id: "Retail", label: "Retail" },
	{ id: "SecurityInvestigations", label: "Security & Investigations" },
	{ id: "Semiconductors", label: "Semiconductors" },
	{ id: "Shipbuilding", label: "Shipbuilding" },
	{ id: "SportingGoods", label: "Sporting Goods" },
	{ id: "Sports", label: "Sports" },
	{ id: "StaffingRecruiting", label: "Staffing & Recruiting" },
	{ id: "Supermarkets", label: "Supermarkets" },
	{ id: "Telecommunications", label: "Telecommunications" },
	{ id: "Textiles", label: "Textiles" },
	{ id: "ThinkTanks", label: "Think Tanks" },
	{ id: "Tobacco", label: "Tobacco" },
	{ id: "TranslationLocalisation", label: "Translation & Localisation" },
	{
		id: "TransportationTruckingRailroad",
		label: "Transportation, Trucking & Railroad",
	},
	{ id: "Utilities", label: "Utilities" },
	{
		id: "VentureCapitalPrivateEquity",
		label: "Venture Capital & Private Equity",
	},
	{ id: "Veterinary", label: "Veterinary" },
	{ id: "Warehousing", label: "Warehousing" },
	{ id: "Wholesale", label: "Wholesale" },
	{ id: "WineSpirits", label: "Wine & Spirits" },
	{ id: "Wireless", label: "Wireless" },
	{ id: "WritingEditing", label: "Writing & Editing" },
];

const investmentRabgeTypes: InvestmentRabgeType[] = [
	{ id: "0-5000", label: "£0 - £5,000" },
	{ id: "5001-10000", label: "£5,001 - £10,000" },
	{ id: "10001-15000", label: "£10,001 - £15,000" },
	{ id: "15001-20000", label: "£15,001 - £20,000" },
	{ id: "20001-25000", label: "£20,001 - £25,000" },
	{ id: "25001-30000", label: "£25,001 - £30,000" },
	{ id: "30001-35000", label: "£30,001 - £35,000" },
	{ id: "35001-40000", label: "£35,001 - £40,000" },
	{ id: "40001-50000", label: "£40,001 - £50,000" },
	{ id: "50001-75000", label: "£50,001 - £75,000" },
	{ id: "75001-100000", label: "£75,001 - £100,000" },
	{ id: "100001-125000", label: "£100,000 - £125,000" },
	{ id: "125001-150000", label: "£125,001 - £150,000" },
	{ id: "150000-250000", label: "£150,000 - £250,000" },
	{ id: "250001-500000", label: "£250,001 - £500,000" },
	{ id: "500001-1000000", label: "£500,001 - £1,000,000" },
	{ id: "1000001", label: "More than £1,000,001" },
];

const objectiveTypes: ObjectiveType[] = [
	{ id: "Increased brand awareness", label: "Increased brand awareness" },
	{ id: "Improve lead generation", label: "Improve lead generation" },
	{ id: "Increase customer engagement", label: "Increase customer engagement" },
	{ id: "Improved sales growth", label: "Improved sales growth" },
	{ id: "Market share expansion", label: "Market share expansion" },
	{ id: "Improve digital presence", label: "Improve digital presence" },
	{
		id: "Improve or begin a content strategy",
		label: "Improve or begin a content strategy",
	},
	{ id: "Reputation Management", label: "Reputation Management" },
	{
		id: "Improved innovation and differentiation",
		label: "Improved innovation and differentiation",
	},
	{
		id: "Improve data-driven decision-making",
		label: "Improve data-driven decision-making",
	},
];

const ContactPageVersionTw: React.FC = () => {
	const [success, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [selectedValues, setSelectedValues] = useState<string[]>([]);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [redirectTimer, setRedirectTimer] = useState(18);
	const [step, setStep] = useState(1);

	const [data, setData] = useState({
		fullName: "",
		call: "",
		email: "",
		serviceType: "",
		industry: "",
		investmentRabge: "",
		objective: "",
		desc: "",
		PivacyCheckmark: "",
	});

	const [dataErrors, setDataErrors] = useState({
		fullName: "",
		call: "",
		email: "",
		serviceType: "",
		industry: "",
		investmentRabge: "",
		objective: "",
		desc: "",
		PivacyCheckmark: "",
	});

	const handleSelectedserviceItemsChange = (selectedItems: string) => {
		setDataErrors(prevErrors => ({
			...prevErrors,
			serviceType: "",
		}));

		setData({
			...data,
			serviceType: selectedItems, // Update the serviceType state with the selected items
		});
	};
	const handleSelectedIndustryItemsChange = (selectedItems: string) => {
		setData({
			...data,
			industry: selectedItems, // Update the serviceType state with the selected items
		});
	};
	const handleSelectedInvestmentRangeItemsChange = (selectedItems: string) => {
		setData({
			...data,
			investmentRabge: selectedItems, // Update the serviceType state with the selected items
		});
	};
	const handleSelectedObjectiveItemsChange = (selectedItems: string) => {
		setData({
			...data,
			objective: selectedItems, // Update the serviceType state with the selected items
		});
	};
	const handlePrivacyChange = (newValue: string) => {
		setDataErrors(prevErrors => ({
			...prevErrors,
			PivacyCheckmark: "",
		}));
		setData(prevData => ({
			...prevData,
			PivacyCheckmark: newValue,
		}));
	};

	const handlesendDataChange = (field: string, value: string) => {
		setDataErrors(prevErrors => ({
			...prevErrors,
			[field]: "",
		}));

		setData(prevData => ({
			...prevData,
			[field]: value,
		}));
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (formSubmitted) {
			timer = setInterval(() => {
				setRedirectTimer(prevTimer => prevTimer - 1);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [formSubmitted]);

	useEffect(() => {
		if (redirectTimer === 0) {
			// Redirect logic here
			window.location.href = "/"; // Change to your home page URL
		}
	}, [redirectTimer]);
	useEffect(() => {
		if (step) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [step]);
	useEffect(() => {
		if (formSubmitted) {
			// Scroll to the top when the confirmation screen is shown
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [formSubmitted]);

	const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const errors: any = {};
		const phoneRegex = /^\+\d{1,4}\d{1,14}$/;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isEmty = (input: any) => (input === "" ? true : false);

		if (step === 1) {
			if (isEmty(data.fullName)) {
				errors.fullName = "First name is required";
			}
			if (isEmty(data.call)) {
				errors.call = "Phone number is required";
			} else if (!phoneRegex.test(data.call)) {
				errors.call = "Phone number should be digits only";
			}
			if (isEmty(data.email)) {
				errors.email = "Email is required";
			} else if (!emailRegex.test(data.email)) {
				errors.email = "Email should be a valid email address";
			}
			if (isEmty(data.serviceType)) {
				errors.serviceType = "Service type is required";
			}
		} else if (step === 2) {
			if (isEmty(data.investmentRabge)) {
				errors.investmentRabge = "Investment range is required";
			}
			if (isEmty(data.industry)) {
				errors.industry = "Industry type is required";
			}
			if (isEmty(data.objective)) {
				errors.objective = "Objective type is required";
			}
			if (isEmty(data.PivacyCheckmark)) {
				errors.PivacyCheckmark = "Privacy consent is required";
			}
		}

		// Set form errors
		setDataErrors({ ...dataErrors, ...errors });

		// If there are errors, stop loading and return
		if (Object.keys(errors).length > 0) {
			setLoading(false);
			return;
		}

		setDataErrors({ ...dataErrors, ...errors });
	if (Object.keys(errors).length === 0) {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/mail-send`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					},
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const responseData = await response.json();

				if (responseData.status === 200) {
					setData({
						fullName: "",
						call: "",
						email: "",
						serviceType: "",
						industry: "",
						investmentRabge: "",
						objective: "",
						desc: "",
						PivacyCheckmark: "",
					});
					setSelectedValues([]);
					setSuccessMessage("Message sent successfully!");

					if (step === 1) {
						setStep(2);
					} else {
						// If we are on the second step, set the form submission success flag to true
						setFormSubmitted(true);
					}
				} else {
					// Handle error
					console.error("EmailJS error:", responseData);
				}
			} catch (error) {
				console.error("EmailJS error:", error);
			} finally {
				setLoading(false);
			}
	} else {
		setLoading(false);
		return;
	}
	
	};

	const prevStep = () => {
		setStep(1);
	};
	const handleNextStep = () => {
		if (step === 1) {
			if (data.fullName !== "" || data.call !== "" || data.email !== "") {
				setStep(2);
			} else {
				return false;
			}
		}
	};

	return (
		<div className="contact-page-main-wrapper min-h-[680px] sm:min-h-auto relative z-50">
			<div className="contact-page-main-cont-wrapper  pb-[80px] sm:pb-[65px]">
				<div className="custom-container">
					<h1 className="contacts-page-title text-[46px] text-center md:text-[34px] sm:text-[32px] font-bold font-tertery leading-[1.2] capitalize mb-9">
						Contact us
					</h1>
					<div className="contact-page-main-content max-w-[852px] grid grid-cols-16 gap-[54px] sm:gap-[45px] md:flex md:flex-col-reverse mx-auto">
						<div className="contact-page-main-left-cont col-span-7 w-full">
							<div className="pragraph-text-box mb-[25px]">
								<h3 className="contact-info-title mb-[5px] text-[28px] sm:text-[22px] text-left text-neu-white font-tertery font-bold leading-[1.2] capitalize">
									Help and support?
								</h3>
								<p className="contact-info-desc text-[16px] mb-[5px] text-left opacity-80 text-neu-white font-tertery leading-[28px] font-normal">
									Please send us all queries or support requests on the email
									mentioned below.
								</p>
								<Link
									href="mailto:support@byparticular.com"
									className=" text-left text-[16px] text-[#799EFF] font-tertery leading-[28px] font-normal">
									info@byparticular.com
								</Link>
							</div>
							<div className="contact-address-info-box">
								<h3 className="contact-info-title mb-[5px] text-[28px] sm:text-[22px] text-left text-neu-white font-tertery font-bold leading-[1.2] capitalize">
									Ready to go? Call us
								</h3>
								<p className="contact-info-desc text-[16px] mb-[5px] text-left opacity-80 text-neu-white font-tertery leading-[28px] font-normal">
									Speak to us Mon - Fri from 9am to 6pm on
								</p>
								<Link
									href="callto:02080682012"
									className=" text-left text-[16px] text-neu-white opacity-80 font-tertery font-bold leading-[28px]">
									+44 (0) 776 028 6287
								</Link>
							</div>
						</div>
						<div className="contact-page-main-right-cont col-span-9  w-full">
							{formSubmitted && (
								<div className="final-steps">
									<div className="confirmationcard-item flex items-start gap-[10px]">
										<div className="confirmation-check-mark">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none">
												<path
													d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
													stroke="#143215"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M22 4L12 14.01L9 11.01"
													stroke="#143215"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</div>
										<div className="confirmation-msg-main">
											<p className="conf-desc mb-[6px] text-[#143215] text-[16px] text-left font-normal font-tertery leading-[28px]">
												Your Query has been submitted successfully, and one of
												our Agents will contact you shortly to discuss further.
											</p>
											<p className="conf-desc mb-[2px] text-[#000000] text-[16px] text-left font-normal font-tertery leading-[28px]">
												Redirecting to Home Page in...
											</p>
											<div className="counter-titmer">
												<span className="text-[#000000] text-[28px] sm:text-[24px] text-left font-normal font-tertery leading-[28px]">
													{redirectTimer}
												</span>
												<span className="text-[#000000] text-[16px] text-left font-bold font-tertery leading-[1.2] capitalize">
													Sec
												</span>
											</div>
										</div>
									</div>
								</div>
							)}

							{!formSubmitted && (
								<>
									<div className="forms-steps-box mb-3">
										<div className="form-steps-head flex justify-between mb-3">
											<p className="form-steps-text opacity-50 uppercase text-[14px] text-left text-neu-white font-tertery font-extrabold leading0normal">
												{step === 1 && "Personal Information"}
												{step === 2 && "Business Information"}
											</p>
											<div className="steps-number opacity-50 uppercase text-[14px] text-right text-neu-white font-tertery font-extrabold leading0normal">
												{step}/2
											</div>
										</div>
										<div className="forms-steps-progressbar h-[2px] relative w-full bg-[#d9d9d980]">
											<span
												className={`prodress-pill absolute h-full  top-0 left-0  active:w-full  ${step === 2 ? "extra-class" : ""}`}></span>
										</div>
									</div>
									<form
										// onSubmit={handleSubmitMessage}
										onSubmit={e => handleSubmitMessage(e)}
										className="contact-form-box steps-form-wrap w-full">
										{/* forms start here */}
										{/* form steps wrapper box */}
										{/* form steps one */}
										{step === 1 && (
											<div className="form-first-steps">
												<div className="contact-form-input-grid-box w-full mb-5">
													<InputField
														name="fullName"
														type="text"
														id="fullName"
														placeholder="John Doe"
														value={data.fullName}
														error={dataErrors.fullName}
														onChange={handlesendDataChange}
														htmlFor="fullName"
														labeltextItem={true}
														labelText="Full Name"
													/>
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}
													<InputField
														htmlFor="email"
														type="text"
														name="email"
														id="email"
														value={data.email}
														error={dataErrors.email}
														onChange={handlesendDataChange}
														placeholder="johndoe@domain.com"
														labeltextItem={true}
														labelText="Email"
													/>
													{/* ========= */}
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}
													<InputCountryNumberSelect
														type="text"
														id="call"
														name="call"
														value={data.call}
														error={dataErrors.call}
														placeholder="0000 0000 00"
														labeltextItem={true}
														labelText="Phone"
														onChange={handlesendDataChange}
													/>

													{/* ========= */}
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}

													<SelectItemWithSearch
														items={serviceTypes.map(service => service.label)}
														placeholder="Select Services"
														SearchPlaceholder="Search Services"
														labeltextItem={true}
														value={data.serviceType}
														error={dataErrors.serviceType}
														labelText="Services"
														onSelectedItemsChange={
															handleSelectedserviceItemsChange
														}
													/>

													{/* ========= */}
												</div>
												{step === 1 && (
													<button
														type="submit"
														onClick={handleNextStep}
														className="next-steps-button glow-button">
														<span className="py-[15px] px-[19px]">
															Proceed to Next Step
														</span>
														<div className="gradient"></div>
													</button>
												)}
											</div>
										)}
										{/* form steps two */}
										{step === 2 && (
											<div className="form-second-steps">
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}

													<SelectItemWithSearch
														items={industryTypes.map(
															industry => industry.label,
														)}
														placeholder="Exp: Select Food Production"
														SearchPlaceholder="Search Industry Type"
														labeltextItem={true}
														labelText="Industry"
														value={data.industry}
														error={dataErrors.industry}
														onSelectedItemsChange={
															handleSelectedIndustryItemsChange
														}
													/>
													{/* ========= */}
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}
													<SelectItemWithSearch
														items={investmentRabgeTypes.map(
															investmentRabge => investmentRabge.label,
														)}
														placeholder="£0 - 5,000"
														SearchPlaceholder="Search Investment Range"
														labeltextItem={true}
														labelText="Investment Range"
														value={data.investmentRabge}
														error={dataErrors.investmentRabge}
														onSelectedItemsChange={
															handleSelectedInvestmentRangeItemsChange
														}
													/>
													{/* ========= */}
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													{/* ======= */}
													<SelectItemWithSearch
														items={objectiveTypes.map(
															objective => objective.label,
														)}
														placeholder="Increased brand awareness"
														SearchPlaceholder="Search Increased brand awareness"
														labeltextItem={true}
														labelText="Objective"
														value={data.objective}
														error={dataErrors.objective}
														onSelectedItemsChange={
															handleSelectedObjectiveItemsChange
														}
													/>
													{/* ========= */}
												</div>
												<div className="contact-form-input-grid-box w-full mb-5">
													<TextArea
														htmlFor="desc"
														id="desc"
														name="desc"
														value={data.desc}
														error={dataErrors.desc}
														onChange={handlesendDataChange}
														placeholder="Tell us a little more about your company or project so our team can prepare how best to help you immediately. (1-3 lines)"
														labeltextItem={true}
														labelText="Message/Query"
													/>
												</div>
												<PivacyCheckmark
													id="checkmark"
													label="By completing this form, I hereby give my consent to Particular Agency to contact me regarding how they can help with things related to my business and marketing. I also give them permission to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time"
													value="By completing this form, I hereby give my consent to Particular Agency to contact me regarding how they can help with things related to my business and marketing. I also give them permission to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time"
													onChange={handlePrivacyChange}
													error={dataErrors.PivacyCheckmark}
												/>
												{step === 2 && (
													<div className="finished-step-btn-box mt-5 flex justify-between items-center gap-[30px]">
														<button
															type="button"
															className="glow-button block"
															onClick={prevStep}>
															<span className=" py-[15px] px-[19px]">
																Previous
															</span>
															<div className="gradient"></div>
														</button>
														<div className="submite-btn-box  flex items-center gap-4">
															{success && !loading && <p>{success}</p>}
															<button
																type="submit"
																className="next-steps-button glow-button block">
																<span className=" py-[15px] px-[19px]">
																	{loading ? "Loading..." : "Send Message"}
																</span>
																<div className="gradient"></div>
															</button>

															{loading ? <SendStatesLoader /> : ""}
														</div>
													</div>
												)}
											</div>
										)}
									</form>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPageVersionTw;
