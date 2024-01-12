"use client";
import ContactBanner from "@/components/common/banner/contact-banner";
import { Link, useState } from "@packages/packages";
import type { NextPage } from "next";

interface Metadata {
	title: string;
	description: string;
}


import Button from "@/components/elements/button/button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import TextArea from "./TextArea";
import PivacyCheckmark from "./PivacyCheckmark";
import SendStatesLoader from "./SendStatesLoader";

interface ApiResponse<T> {
	message: string;
	data: T;
	status: number;
}
interface ServiceType {
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
	// Add more service types here as needed
];

const ContactPage: React.FC = () => {
	 const metadata: Metadata = {
			title: "Contact Us",
			description:
				"Ready to elevate your digital presence? Contact us today! Our page provides easy ways to get in touch with our expert digital marketing team. Whether it's for SEO, PPC, Web Design, or a bespoke marketing strategy, we're here to help your business succeed. Reach out for a consultation or any queries you have",
		};
		
	const [success, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);



	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		call: "",
		email: "",
		serviceType: "",
		industry: "",
		investmentRabge: "",
		bussinesSize: "",
		projectIdea: "",
		desc: "",
		PivacyCheckmark: "",
	});

	const [dataErrors, setDataErrors] = useState({
		firstName: "",
		lastName: "",
		call: "",
		email: "",
		serviceType: "",
		industry: "",
		investmentRabge: "",
		bussinesSize: "",
		projectIdea: "",
		desc: "",
		PivacyCheckmark: "",
	});


  const handleCheckboxChange = (newSelectedValues: string[]) => {
		setSelectedValues(newSelectedValues);
		setData(prevData => ({
			...prevData,
			serviceType: newSelectedValues.join(", "), // Update to join multiple values
		}));
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

	const handleSubmitMessage = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setLoading(true);
		const errors: any = {};
		const phoneRegex = /^\d{11}$/;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isEmty = (input: any) => (input === "" ? true : false);
		if (isEmty(data.firstName)) {
			errors.firstName = "First name is required";
		}
		if (isEmty(data.lastName)) {
			errors.lastName = "Last name is required";
		}
		if (isEmty(data.call)) {
			errors.call = "Phone number is required";
		} else if (!phoneRegex.test(data.call)) {
			errors.call = "Phone number should be 11 digits only";
		}

		if (isEmty(data.email)) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(data.email)) {
			errors.email = "Email should be a valid email address";
		}

		if (isEmty(data.serviceType)) {
			errors.serviceType = "Service type is required";
		} else {
			delete errors.serviceType;
		}

		if (isEmty(data.industry)) {
			errors.industry = "Industry is required";
		}

		if (isEmty(data.investmentRabge)) {
			errors.investmentRabge = "Investment range is required";
		}

		if (isEmty(data.bussinesSize)) {
			errors.bussinesSize = "Business size is required";
		}

		if (isEmty(data.projectIdea)) {
			errors.projectIdea = "Project idea is required";
		}

		if (isEmty(data.desc)) {
			errors.desc = "Description is required";
		}

		if (isEmty(data.PivacyCheckmark)) {
			errors.PivacyCheckmark = "Privacy consent is required";
		} else {
			delete errors.PivacyCheckmark;
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
						firstName: "",
						lastName: "",
						call: "",
						email: "",
						serviceType: "",
						industry: "",
						investmentRabge: "",
						bussinesSize: "",
						projectIdea: "",
						desc: "",
						PivacyCheckmark: "",
					});
					setSelectedValues([]);
					setSuccessMessage("Message sent successfully!");
					setTimeout(() => {
						setSuccessMessage("");
					}, 3000);
				} else {
					// Handle error
					console.error("EmailJS error:", responseData);
				}
			} catch (error) {
				console.error("EmailJS error:", error);
			} finally {
				setLoading(false); // Set loading state to false when done
			}
		} else {
			setLoading(false);
			return;
		}
	};

	return (
		<div className="contact-page-main-wrapper">
			<ContactBanner />
			<div className="contact-page-main-cont-wrapper pt-[100px] pb-[146px] sm:pt-[45px] sm:pb-[45px]">
				<div className="custom-container">
					<div className="contact-page-main-content grid grid-cols-16 gap-5 sm:gap-[45px] sm:flex sm:flex-col-reverse max-w-[1430px] mx-auto">
						<div className="contact-page-main-left-cont col-span-7   pl-4 laptop-m:pl-0 max-w-[546px] sm:max-w-full w-full">
							<div className="pragraph-text-box  mb-16 sm:mb-[35px]">
								<p className="contact-page-nfo-desc mb-5 text-left text-light-gray font-primary font-normal leading-normal sm:max-w-[332px] text-[26px] sm:text-[18px]">
									Hey there! Let’s chat
								</p>
								<p className="contact-page-nfo-desc mb-5 text-left text-light-gray font-primary font-normal leading-normal sm:max-w-[332px] text-[26px] sm:text-[18px]">
									Interested in working with us?
								</p>
								<p className="contact-page-nfo-desc mb-5 text-left text-light-gray font-primary font-normal leading-normal sm:max-w-[332px] text-[26px] sm:text-[18px]">
									Or you want to get in touch about a general enquiry?
								</p>
								<p className="contact-page-nfo-desc  text-left text-light-gray font-primary font-normal leading-normal sm:max-w-[332px] text-[26px] sm:text-[18px]">
									Fill in the form today, and our team will be in touch shortly.
								</p>
							</div>
							<div className="contact-address-info-box mb-16 sm:mb-[35px]">
								<h6 className="info-title text-left text-primary font-primary font-normal leading-normal mb-5 sm:mb-2 sm:max-w-[311px] text-[26px] sm:text-[18px]">
									Prefer to talk?
								</h6>
								<p className="contact-addres-info-desc text-left text-primary font-primary font-normal leading-normal sm:max-w-[311px] mb-5 text-[20px] sm:text-[7px]">
									Call us on +44 (0) 208 068 2102 on Monday to Friday between
									9am - 6pm and our Relationships team will discuss how we may
									best help you.
								</p>
							</div>
							{/* <ul className="socials-widgets flex items-center gap-12">
								<li className="socials-widgets-list-item">
									<Link href="/" className="block">
										<TwitterIcons isWhiteVariant={true} />
									</Link>
								</li>
								<li className="socials-widgets-list-item">
									<Link href="/" className="block">
										<InstagrameIcons isWhiteVariant={true} />
									</Link>
								</li>
								<li className="socials-widgets-list-item">
									<Link href="/" className="block">
										<YoutubeIcons isWhiteVariant={true} />
									</Link>
								</li>
							</ul> */}
						</div>
						<div className="contact-page-main-right-cont col-span-9  pl-16 laptop-m:pl-0 w-full">
							<h6 className="contact-form-title mb-10 text-text--large text-left text-light-gray font-primary font-normal leading-none">
								Form
							</h6>
							<form
								onSubmit={handleSubmitMessage}
								className="contact-form-boxc w-full flex flex-col gap-5">
								<div className="contact-form-input-grid-box flex items-center gap-5 w-full">
									{/* ======= */}
									<InputField
										name="firstName"
										type="text"
										id="firstName"
										placeholder="First Name"
										htmlFor="firstName"
										value={data.firstName}
										error={dataErrors.firstName}
										onChange={handlesendDataChange}
									/>
									<InputField
										name="lastName"
										type="text"
										id="lastName"
										placeholder="Last Name"
										value={data.lastName}
										error={dataErrors.lastName}
										onChange={handlesendDataChange}
										htmlFor="lastName"
									/>
								</div>
								{/* ========= */}

								<div className="contact-form-input-grid-box flex items-center gap-5 w-full">
									{/* ======= */}
									<InputField
										htmlFor="call"
										type="text"
										name="call"
										id="call"
										value={data.call}
										error={dataErrors.call}
										onChange={handlesendDataChange}
										placeholder="Phone number"
									/>
									{/* ========= */}
									{/* ======= */}
									<InputField
										htmlFor="email"
										type="text"
										name="email"
										id="email"
										value={data.email}
										error={dataErrors.email}
										onChange={handlesendDataChange}
										placeholder="Email address"
									/>

									{/* ========= */}
								</div>
								{/* =====services list of points=============== */}
								<div className="contact-form-input-grid-box w-full">
									<h6 className="title-checkbox-services mb-5 text-[18px] font-normal font-primary text-left text-neu-white leading-none">
										Which Service(s) are you looking for?
									</h6>
									<div className="contacts-forms-service-lists-box flex md:flex-wrap md:justify-center justify-between items-start gap-3 sm:flex-col sm:items-center sm:justify-center">
										{serviceTypes.map(service => (
											<Checkbox
												key={service.id}
												label={service.label}
												value={service.id}
												id={`services-${service.id}`} // Change as needed for unique IDs
												htmlFor={`services-${service.id}`} // Change as needed for unique HTML for attributes
												selectedValues={selectedValues} // Pass the array of selected values
												onChange={handleCheckboxChange}
											/>
										))}
									</div>
									{dataErrors.serviceType ?? (
										<p className="text-red-700">{dataErrors.serviceType}</p>
									)}
								</div>
								{/* ============ */}
								<div className="contact-form-input-grid-box flex items-center gap-5 w-full">
									{/* ======= */}
									<InputField
										htmlFor="industry"
										type="text"
										name="industry"
										id="industry"
										placeholder="Industry"
										value={data.industry}
										error={dataErrors.industry}
										onChange={handlesendDataChange}
									/>
									{/* ========= */}
									{/* ======= */}
									<InputField
										htmlFor="investmentRabge"
										type="text"
										name="investmentRabge"
										id="investmentRabge"
										placeholder="Project Investment Range"
										value={data.investmentRabge}
										error={dataErrors.investmentRabge}
										onChange={handlesendDataChange}
									/>
									{/* ========= */}
								</div>
								{/* ========= */}

								<div className="contact-form-input-grid-box flex items-center gap-5 w-full">
									{/* ======= */}
									<InputField
										htmlFor="bussinesSize"
										type="text"
										name="bussinesSize"
										id="bussinesSize"
										value={data.bussinesSize}
										error={dataErrors.bussinesSize}
										onChange={handlesendDataChange}
										placeholder="Business Size"
									/>
									{/* ========= */}
									{/* ======= */}
									<InputField
										htmlFor="projectIdea"
										type="text"
										name="projectIdea"
										id="projectIdea"
										value={data.projectIdea}
										error={dataErrors.projectIdea}
										onChange={handlesendDataChange}
										placeholder="Company Name"
									/>
									{/* ========= */}
								</div>
								<div className="contact-form-input-grid-box flex items-center gap-5 w-full">
									<TextArea
										htmlFor="desc"
										id="desc"
										name="desc"
										value={data.desc}
										error={dataErrors.desc}
										onChange={handlesendDataChange}
										placeholder="Message"
									/>
								</div>
								{success && !loading && <p>{success}</p>}

								<div className="submite-btn-box my-[10px] flex items-center gap-4">
									<Button
										type="submit"
										btnText={loading ? "Loading..." : "Send"}
										btnVariant="primary-submit-button form-btn max-w-[122px]"
									/>
									{loading ? <SendStatesLoader /> : ""}
								</div>
								<PivacyCheckmark
									id="checkmark"
									label="I hereby give my consent to Particular Agency to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time."
									value="I hereby give my consent to Particular Agency to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time."
									onChange={handlePrivacyChange}
									error={dataErrors.PivacyCheckmark}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
