import Button from "@/components/elements/button/button";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - Particular Agency London",
	description:
		"Your privacy matters to us. Dive into our Privacy policy to understand how we protect your personal information and respect your rights. Learn about our data collection, usage, and security practices. Trust and transparency are our top priorities",
};
const TermsCondition = () => {
	return (
		<div className="legal-info-content-wrapper pt-[140px] pb-[70px]">
			<div className="custom-container max-w-[995px] px-0 md:px-8 sm:px-4 mx-auto">
				<h1 className="legal-info-title text-neu-white text-[46px] sm:text-[25px] text-left font-primary font-bold leading-[1.2] capitalize mb-9">
					Navigating Through the agency with Our Privacy Policy.
				</h1>
				<div className="legal-content-text-main-cont mb-[97px]">
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Introduction
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							This privacy notice explains the personal data we may collect
							about you when you visit our website or interact with us. It also
							sets out how we will store, handle and secure that data. We
							understand that there is a lot to go through and we hope that the
							information set out answers any questions you may have. It may be
							necessary to update our Privacy Policy from time to time, so
							please come back and check this whenever you wish
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Who we are and our role in your privacy
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							We are Particular Holdings Ltd registered in England under company
							number 13011806, whose registered office is at 8 Cody Road, E16
							4SR. For the purpose of data protection legislation, we act as the
							'Data Controller' of personal data. This means we determine how
							and why your data are processed. We are registered as a Data
							Controller at the UK Information Commissioner's Office.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							About this
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							policy If you are a Particular Agency customer or just visiting
							our website, this policy applies to you.
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ The protection of your privacy and personal information is very
							important to us and so we make sure that not only do we have
							appropriate security measures in place, but that any other
							organisation we work with to provide a service also meets the same
							standard as us.
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ This Privacy Notice explains in detail the types of personal
							data we may collect about you when you interact with us. It also
							explains how we'll store and handle that data and keep it safe. ​
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							'Personal information' is data that relates to you and that
							identifies or can be used to identify you. This may be your name,
							address, email or other digital identifiers such as cookies or IP
							address.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Third party links
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Our website and other documents you receive from us may contain
							links to third-party websites. Following these links may allow
							third parties to collect or share data about you. We are not
							responsible for these third-party websites and their privacy
							policies
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ If you are our customer, please also check the contracts between
							us: they may contain further details on how we collect and process
							your data.
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ If you provide us with personal information about other people,
							or if others give us your information, we will only use that
							information for the specific reason for which it was provided to
							us. By submitting the information, you confirm that you have the
							right to authorise us to process it on your behalf in accordance
							with this Privacy Policy.
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ Explaining the legal bases we rely on to collect and process
							your personal data
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ We may use a number of different reasons under the data
							protection legislation for collecting and processing your personal
							data including
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ Contractual obligations In certain circumstances, we need your
							personal data to comply with our contractual obligations.
						</p>
						<p className="legal-cont-text-desc info-text">
							​ For example: if you make a purchase from us, we will collect
							your payment card details to take payment. ​
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Legitimate interest
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							In specific situations, we require your data to pursue our
							legitimate interests in a way which might reasonably be expected
							as part of running our business and which does not materially
							impact your rights, freedom or interests.
						</p>
						<p className="legal-cont-text-desc info-text">
							​ For example: we will use your email address to contact you with
							relevant products and services we think might be of interest to
							you.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Consent
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							In specific situations, we can collect and process your data with
							your consent. For example: when you tick a box to receive email
							newsletters
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Legal obligation
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							If the law requires us to, we may need to collect and process your
							data.
						</p>
						<p className="legal-cont-text-desc info-text">
							​ For example: we can pass on details of people involved in fraud
							or other criminal activity to law enforcement agencies You can
							change your mind! If you have previously given consent to our
							processing your data, you can freely withdraw such consent at any
							time. You can do this by emailing us at info@byparticular.com
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Information we collect from you
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Personal data or information is any information about an
							individual that can be used to identify that person. Types of data
							wemay collect, use, store and transfer are:
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Identity and contact data
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Your name, company name, home and company address, telephone
							number, email address, billing address.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Payment data
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Payment card details and details of products and services you have
							purchased from us.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Data that identifies you
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Your IP address, login information, browser type and version, time
							zone setting, browser plug-in types, geolocation information about
							where you might be and operating system
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Profile data
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Your username and password, purchases or orders made by you
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Usage data
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Your URL clickstreams (the path you take through our site),
							products/services viewed, page response times, download errors,
							how long you stay on our pages, what you do on those pages, how
							often, and other actions
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Marketing and communications data
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Your preferences in receiving marketing from us and your
							communication preferences. We will never share your data with a
							third-party without your explicit consent
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							What about really sensitive data?
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							We don't collect any "sensitive data" about you (like racial or
							ethnic origin, political opinions, religious/philosophical
							beliefs, trade union membership, genetic data, biometric data,
							health data, data about your sexual life or orientation, and
							offences or alleged offences) except when we have your specific
							consent, or when we have to comply with the law.
						</p>
						<ul>
							<li className="info-text">​ When we collect your information</li>
							<li className="info-text">
								​When you create an account with us or sign in
							</li>
							<li className="info-text">​ When you make an online purchase</li>
							<li className="info-text">
								When you engage with us on social media
							</li>
							<li className="info-text">
								When you submit information via our website or other web form
							</li>
						</ul>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Request to be contacted
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Contact us with a question or request
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Use our Services
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Provide a testimonial review or comment "Like", "Follow" or
							otherwise connect with or post to one of our
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							Social Media Pages
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							Give us some feedback or evaluate our services Cookies please see
							our cookie policy for more information When you choose to complete
							any surveys, we send you.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-7">
						<h3 className="legal-cont-text-title info-text underline mb-4">
							How we use the information
						</h3>
						<p className="legal-cont-text-desc info-text mb-4">
							we collect Data protection law means that we can only use your
							data for certain reasons and where we have a legal basis to do so.
							We use different legal bases depending upon the purpose for
							collecting your data in the first instance.
						</p>
						<ul className="mb-6">
							<li className="info-text">
								​Here are the specific reasons for which we process your data:
							</li>
							<li className="info-text">Purpose or Activity</li>
							<li className="info-text">Personal data that may be used</li>
							<li className="info-text">Lawful basis of processing</li>
							<li className="info-text">To deliver agreed services contract</li>
							<li className="info-text">
								{" "}
								To manage our relationship with you
							</li>
							<li className="info-text">
								To provide consultancy or advisory services to you
							</li>
							<li className="info-text">
								To administer day-to-day operations Sending you emails, messages
								about new features, updates, content, products and services
							</li>
						</ul>
						<p className="legal-cont-text-desc info-text mb-4">
							​ For all data collected to sign up for a product and service such
							as a newsletter we process the data using Legitimate Interest,
							i.e. you are able to access an extensive range of information in
							exchange for supplying your information, and we have a
							relationship where the balance of benefit is in your favour. You
							always have a choice in the management of your data in this manner
							and can opt out of processing under this basis at any time.
						</p>
						<p className="legal-cont-text-desc info-text mb-4">
							​ Where you provide data in the course of a contractual agreement,
							we process your data under Contract, i.e. your data is necessary
							for the fulfilment of the service. Any additional contact, i.e.
							telling you about another product or service closely related to
							the product or service you have contracted is managed under
							legitimate interest.
						</p>
						<ul className="mb-6">
							<li className="info-text">
								Any secondary processing of your data, i.e. transfer to third
								countries, is managed under Consent
							</li>
							<li className="info-text">Name ​</li>
							<li className="info-text">Email</li>
							<li className="info-text">Contact</li>
							<li className="info-text">Name</li>
							<li className="info-text">Email</li>
							<li className="info-text">Contact</li>
							<li className="info-text">Name</li>
							<li className="info-text">Email</li>
							<li className="info-text">Telephone</li>
							<li className="info-text">Contact</li>
							<li className="info-text">Name</li>
							<li className="info-text">Contact</li>
							<li className="info-text">Profile</li>
							<li className="info-text">Usage</li>
							<li className="info-text">Name</li>
							<li className="info-text">Email</li>
							<li className="info-text">Contact</li>
						</ul>
						<ul className="mb-6">
							<li className="info-text">Your privacy choices and rights</li>
							<li className="info-text">
								You can choose not to provide us with personal data
							</li>
							<li className="info-text">
								If you choose to do this, you can continue to use the website
								and browse its pages, but we will not be
							</li>
							<li className="info-text">
								able to communicate with you without your personal data.​
							</li>
						</ul>
						<ul className="mb-6">
							<li className="info-text">
								You can turn off cookies in your browser by changing its
								settings
							</li>
							<li className="info-text">
								You can block cookies by activating a setting on your browser
								allowing you to refuse cookies. You can also delete cookies
								through your browser settings. If you turn off cookies, you can
								continue to use the website and browse its pages, but Particular
								Agency may not work as effectively.
							</li>
						</ul>
						<ul className="mb-6">
							<li className="info-text">
								You can ask us not to use your data for marketing
							</li>
							<li className="info-text">
								We will inform you (before collecting your data) if we intend to
								use your data for marketing and we will never pass on your
								information to third parties without your consent.
							</li>
						</ul>
						<ul className="mb-6">
							<li className="info-text">Your rights</li>
							<li className="info-text">
								You can exercise your rights by sending us an email at
								info@byparticular.com
							</li>
						</ul>
						<p className="info-text mb-5">
							You have the right to make us correct any inaccurate personal data
							about you
						</p>
						<p className="info-text mb-5">
							You can object to us using your data for profiling
						</p>
						<p className="info-text mb-5">
							​ We may use your data to determine whether we should let you know
							information that might be relevant to you (for example, tailoring
							emails to you based on your behaviour).
						</p>
						<p className="info-text mb-5">
							You have the right to port your data to another service
						</p>
						<p className="info-text mb-5">
							We will give you a copy of your data so that you can provide it to
							another service. If you ask us and where it is possible, we will
							directly transfer the data to the other service for you.
						</p>
						<p className="info-text mb-5">
							You have the right to be 'forgotten' by us
						</p>
						<p className="info-text mb-5">
							You can do this by asking us to erase any personal data we hold
							about you, if it is no longer necessary for us to hold thedata for
							purposes of your use of Particular Agency.
						</p>
						<p className="info-text mb-5">
							​ You have the right to lodge a complaint regarding our use of
							your data
						</p>
						<p className="info-text mb-5">
							​ Please tell us first, so we have a chance to address your
							concerns. If we fail in this, you can address anycomplaint to the
							UK Information Commissioner's Office, either by calling their
							helpline or as directed on theirwebsite at www.ico.org.uk.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							The categories of data we're processing
						</p>
						<p className="legal-cont-text-desc info-text">
							We have physical, electronic, and managerial procedures to
							safeguard and secure the information we collect.
						</p>
						<p className="legal-cont-text-desc info-text">Please remember:</p>
						<p className="legal-cont-text-desc info-text">
							You provide personal data at your own risk: unfortunately, no data
							transmission is guaranteed to be 100% secure
						</p>
						<p className="legal-cont-text-desc info-text">
							You are responsible of your username and password: keep them
							secret and safe!
						</p>
						<p className="legal-cont-text-desc info-text">
							If you believe your privacy has been breached, please contact us
							immediately at info@byparticular.com
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							Where do we store your data?
						</p>
						<p className="legal-cont-text-desc info-text">
							The personal data we collect is processed at our offices in London
							and Riga and in any data processing facilities operated by the
							third parties we use.
						</p>
						<p className="legal-cont-text-desc info-text">
							By submitting your personal data, you agree to this transfer,
							storing or processing by us. If we transfer or store your
							information outside the EEA in this way, we will take steps to
							ensure that your privacy rights continue to be protected as
							outlined in this Privacy Policy.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							How long do we store your data?
						</p>
						<p className="legal-cont-text-desc info-text">
							We will stop actively using and delete any personal identifiable
							information about you within 12 months from the last time you were
							in contact with Particular Agency. If agreed by a separate
							contract, we will delete your personal data from our archives no
							later than 6 years or as agreed with you in a separate contract.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							Third parties who process your data
						</p>
						<p className="legal-cont-text-desc info-text">
							Particular Agency may from time to time share your personal data
							with third parties in order to ensure the services required work
							well. When we do this, we will ensure that your data is shared
							only when necessary and, according to the safeguards and good
							practices detailed in this Privacy Policy.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							The third parties can include external companies who act as our
							partners, suppliers, insurers and agencies but only where they
							meet our standards of data and security.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							​ We only share information which allows us to provide their
							service to us or facilitate them providing our services to you.
							These may include third parties who provide IT and system
							administration, HR, marketing and financial services.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							​How we use cookies
						</p>
						<p className="legal-cont-text-desc info-text">
							We use cookies. Unless you adjust your browser settings to refuse
							cookies, we (and these third parties) will issue cookies when you
							interact with Particular Agency. These may be 'session' cookies,
							meaning they delete themselves when you leave Acumenology,
						</p>
						<p className="legal-cont-text-desc info-text">
							or 'persistent' cookies which do not delete themselves and help us
							recognise you when you return so we can provide a tailored
							service.
						</p>
					</div>
					{/* ================ */}
					<div className="legal-cont-text-item mb-6">
						<p className="legal-cont-text-desc info-text">
							How can I block cookies?
						</p>
						<p className="legal-cont-text-desc info-text mb-5">
							You can block cookies by activating a setting on your browser
							allowing you to refuse the setting of cookies. You can also delete
							cookies through your browser settings. If you use your browser
							settings to disable, reject, or block cookies (including essential
							cookies), certain parts of our website will not function fully. In
							some cases, our website may not be accessible at all. Please note
							that where third parties use cookies, we have no control over how
							those third parties use those cookies.
						</p>
						<p className="legal-cont-text-desc info-text mb-5">
							Further details can be found in our Cookie Policy
						</p>
						<p className="legal-cont-text-desc info-text">
							Queries & complaints
						</p>
						<p className="legal-cont-text-desc info-text mb-5">
							If after reviewing this Privacy Policy, you have any questions,
							complaints or privacy concerns, or wouldliketo make any requests
							in relation to your Personal Information, please send an email to
							us at info@byparticular.com
						</p>

						<p className="legal-cont-text-desc info-text">Complaints</p>
						<p className="legal-cont-text-desc info-text">
							If you're not satisfied with our response to any complaint or
							believe our processing of your information does not comply with
							data protection law, you can make a complaint to the Information
						</p>
						<p className="legal-cont-text-desc info-text">
							Commissioner's Office (ICO) using the following details:
						</p>
						<p className="legal-cont-text-desc info-text">
							Address: Information Commissioner's Office, Wycliffe House, Water
							Lane, Wilmslow, Cheshire SK9 5AF Telephone number: 0303 123 1113
							Website: www.ico.org.uk
						</p>
					</div>
					{/* ============ */}
				</div>
				<div className="cta-wrapper-box text-center flex justify-center flex-col items-center">
					<p className="desc-text text-[18px] text-center text-neu-white font-medium font-primary leading-normal">
						What’s Next Starts Here. Get in touch at{" "}
						<Link href="mailto:Info@Byparticular.com" className="underline">
							Info@Byparticular.com
						</Link>
					</p>
					<Link href="/contacts" className="w-full flex justify-center">
						<Button
							btnText="Start a Project"
							btnVariant="bg-secondary-2 mt-[51px]"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TermsCondition;
