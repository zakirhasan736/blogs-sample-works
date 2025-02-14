"use client";
import React, { useState, useEffect } from "react";
import InputField from "@/pageComponents/Contacts/InputField";
import TextArea from "@/pageComponents/Contacts/TextArea";
import SendStatesLoader from "@/pageComponents/Contacts/SendStatesLoader";
import InputCountryNumberSelect from "@/components/elements/country-select/input-country-number-select";
import Image from "next/image";

const PPCLandingBanner = () => {
  const [success, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(18);
  const [step, setStep] = useState(1);
  const [hasWebsite, setHasWebsite] = useState('no');

  // const [data, setData] = useState({
  //   fullName: "",
  //   call: "",
  //   email: "",
  //   desc: "",
  // });
   const [data, setData] = useState({
     websitePurpose: "",
     concernAboutWebsite: "",
     reachTargetAudience: "",
     idealOutcomeOfRedesign: "",
    budget: "",
   });

  // const [dataErrors, setDataErrors] = useState({
  //   fullName: "",
  //   call: "",
  //   email: "",
  //   desc: "",
  // });

  const [dataErrors, setDataErrors] = useState({
    websitePurpose: "",
    concernAboutWebsite: "",
    reachTargetAudience: "",
    idealOutcomeOfRedesign: "",
    budget: "",
  });

  const handlesendDataChange = (field: string, value: string) => {
    setDataErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));

    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const handleSubmitCTAMessage = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const errors: any = {};
  //   const phoneRegex = /^\+\d{1,4}\d{1,14}$/;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isEmty = (input: any) => (input === "" ? true : false);
  //   // Validate input fields based on the current step
  //   if (isEmty(data.fullName)) {
  //     errors.fullName = "First name is required";
  //   }
  //   if (isEmty(data.call)) {
  //     errors.call = "Phone number is required";
  //   } else if (!phoneRegex.test(data.call)) {
  //     errors.call = "Phone number should be digits only";
  //   }
  //   if (isEmty(data.email)) {
  //     errors.email = "Email is required";
  //   } else if (!emailRegex.test(data.email)) {
  //     errors.email = "Email should be a valid email address";
  //   }
  //   if (isEmty(data.desc)) {
  //     errors.desc = "Description is required";
  //   }

  //   // Set form errors
  //   setDataErrors({ ...dataErrors, ...errors });

  //   // If there are errors, stop loading and return
  //   if (Object.keys(errors).length > 0) {
  //     setLoading(false);
  //     return;
  //   }

  //   setDataErrors({ ...dataErrors, ...errors });

  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/api/cta-mail-send`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const responseData = await response.json();

  //       if (responseData.status === 200) {
  //         setData({
  //           fullName: "",
  //           call: "",
  //           email: "",
  //           desc: "",
  //         });
  //         setSelectedValues([]);
  //         setSuccessMessage("Message sent successfully!");
  //         setFormSubmitted(true);
  //         setTimeout(() => {
  //           setSuccessMessage("");
  //         }, 3000);
  //       } else {
  //         // Handle error
  //         console.error("EmailJS error:", responseData);
  //       }
  //     } catch (error) {
  //       console.error("EmailJS error:", error);
  //     } finally {
  //       setLoading(false); // Set loading state to false when done
  //     }
  //   } else {
  //     setLoading(false);
  //     return;
  //   }
  // };

   const handleSubmitCTAMessage = async (
     e: React.FormEvent<HTMLFormElement>
   ) => {
     e.preventDefault();
     setLoading(true);
     const errors: any = {};
     const phoneRegex = /^\+\d{1,4}\d{1,14}$/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const isEmty = (input: any) => (input === "" ? true : false);
     // Validate input fields based on the current step
     if (isEmty(data.concernAboutWebsite) || isEmty(data.websitePurpose)) {
       errors.fullName = "This field is required";
     }
    //  if (isEmty(data.idealOutcomeOfRedesign)) {
    //    errors.call = "This field is required";
    //  } else if (!phoneRegex.test(data.call)) {
    //    errors.call = "Phone number should be digits only";
     //  }
     if (isEmty(data.idealOutcomeOfRedesign) || isEmty(data.reachTargetAudience)) {
       errors.call = "This field is required";
     }
    //  if (isEmty(data.email)) {
    //    errors.email = "Email is required";
    //  } else if (!emailRegex.test(data.email)) {
    //    errors.email = "Email should be a valid email address";
    //  }
     if (isEmty(data.budget)) {
       errors.desc = "Pls add your budget";
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
           `${process.env.NEXT_PUBLIC_API_URL}/api/cta-mail-send`,
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(data),
           }
         );

         if (!response.ok) {
           throw new Error("Network response was not ok");
         }

         const responseData = await response.json();

         if (responseData.status === 200) {
           setData({
             websitePurpose: "",
             concernAboutWebsite: "",
             reachTargetAudience: "",
             idealOutcomeOfRedesign: "",
             budget: "",
           });
           setSelectedValues([]);
           setSuccessMessage("Message sent successfully!");
           setFormSubmitted(true);
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
    <section className="ppc-landing-banner-sec-wrap pt-[160px] pb-[75px]">
      <div className="custom-container max-w-[1220px]">
        <div className="landingpage-hero-section flex items-start gap-2 md:flex-col md:gap-8">
          <div className="hero-content">
            <p className="tag-title text-text-xxs-small">
              DISPLAY, E-COMMERCE, PORTFOLIO, WEB APPS
            </p>
            <h1>Web Development Agency</h1>
            {/* <p className="tagline">
							We develop websites for display, e-commerce, portfolio use and web
							app experiences. If you’re similar to our existing clients, then
							you likely want to:
						</p> */}
            <div className="features">
              <ul>
                <li>Acquire Customers More Consistently and Improve Sales</li>
                <li>
                  Grow your Business Financially and Improve Financial Security
                </li>
                <li>
                  Increase Awareness about your Brand with your Target Audience
                </li>
                <li>Improve your Brand Perception</li>
              </ul>
            </div>
            {/* <div className="actions md:max-w-[600px] sm:flex-col sm:gap-8">
							<div className="left">
								<a href="#">Is Your Website Losing You Business?</a>
								<p className="max-w-[365px] md:mt-3">
									If you already have a website, take our self-assessment quiz
									to see if it’s ready to generate business (5 min) .
								</p>
							</div>
							<div className="vertical-sep sm:hidden"></div>
							<div className="right pl-5 max-w-[250px] mx-auto">
								<div className="badges">
									<iframe
										width="100"
										height="100"
										src="https://shareables.clutch.co/share/badges/2319008/76629?utm_source=clutch_top_company_badge&utm_medium=image_embed"
										title="Top Clutch Jquery Company United Kingdom 2024"></iframe>
									<iframe
										width="100"
										height="100"
										src="https://shareables.clutch.co/share/badges/2319008/76630?utm_source=clutch_top_company_badge&utm_medium=image_embed"
										title="Top Clutch Jquery Company London 2024"></iframe>
								</div>
								<p className="block mt-2">Awarded by Clutch</p>
							</div>
						</div> */}
            <div className="actions md:max-w-[600px] flex-col sm:gap-8">
              <div className="flex flex-col w-3/4">
                <i className="mb-2">Already have a website??</i>
                <a href="#" className="text-center">
                  Take A Self Assessment Quiz
                </a>
              </div>
              <div className="mt-[47px]">
                <div className="flex gap-1">
                  <iframe
                    width="100"
                    height="100"
                    src="https://shareables.clutch.co/share/badges/2319008/76629?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                    title="Top Clutch Jquery Company United Kingdom 2024"
                  ></iframe>
                  <iframe
                    width="100"
                    height="100"
                    src="https://shareables.clutch.co/share/badges/2319008/76630?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                    title="Top Clutch Jquery Company London 2024"
                  ></iframe>
                </div>
                <p className="block mt-2 uppercase ml-4">Awarded by Clutch</p>
              </div>
            </div>
          </div>

          <div className="usp-form max-w-[550px] w-full">
            <div className="curve-graph">
              <Image
                width={187}
                height={114}
                src="/images/illustration-curve-chart.svg"
                alt="cta modal images"
              />
            </div>
            <div className="bar-graph">
              <Image
                width={175}
                height={114}
                src="/images/illustration-bar-graph.svg"
                alt="cta modal images"
              />
            </div>
            <div className="hero-form w-full">
              <form
                onSubmit={(e) => handleSubmitCTAMessage(e)}
                className="cta-form-box steps-form-wrap w-full"
              >
                <div>
                  <span className="text-gray-700">
                    Do you have a website already?
                  </span>
                  <div className="flex justify-between w-3/4">
                    <label className="!flex gap-4">
                      <input
                        type="radio"
                        className="form-radio h-6 w-6 accent-black"
                        name="website"
                        value="no"
                        checked={hasWebsite === "no"}
                        onChange={() => setHasWebsite("no")}
                      />
                      <span>No</span>
                    </label>
                    <label className="!flex gap-4">
                      <input
                        type="radio"
                        className="form-radio h-6 w-6 accent-black"
                        name="website"
                        value="yes"
                        checked={hasWebsite === "yes"}
                        onChange={() => setHasWebsite("yes")}
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                </div>
                <div className="contact-form-input-grid-box w-full mb-2">
                  <InputField
                    name={
                      hasWebsite === "yes"
                        ? "concernAboutWebsite"
                        : "websitePurpose"
                    }
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    value={
                      hasWebsite === "yes"
                        ? `${data.concernAboutWebsite}`
                        : `${data.websitePurpose}`
                    }
                    error={
                      hasWebsite === "yes"
                        ? `${data.concernAboutWebsite}`
                        : `${data.websitePurpose}`
                    }
                    onChange={handlesendDataChange}
                    htmlFor={
                      hasWebsite === "yes"
                        ? "concernAboutWebsite"
                        : "websitePurpose"
                    }
                    labeltextItem={true}
                    labelText={
                      hasWebsite === "yes"
                        ? "What is your main concern about your current website?"
                        : "What is the purpose of your new website?"
                    }
                  />
                </div>
                <div className="contact-form-input-grid-box w-full mb-2">
                  {/* ======= */}
                  <InputField
                    htmlFor="email"
                    type="text"
                    name={
                      hasWebsite === "yes"
                        ? "idealOutcomeOfRedesign"
                        : "reachTargetAudience"
                    }
                    id="email"
                    value={
                      hasWebsite === "yes"
                        ? `${data.idealOutcomeOfRedesign}`
                        : `${data.reachTargetAudience}`
                    }
                    error={
                      hasWebsite === "yes"
                        ? `${data.idealOutcomeOfRedesign}`
                        : `${data.reachTargetAudience}`
                    }
                    onChange={handlesendDataChange}
                    placeholder="johndoe@domain.com"
                    labeltextItem={true}
                    labelText={
                      hasWebsite === "yes"
                        ? "What is the Ideal outcome of the redesign?"
                        : "How do you currently reach your target audience?"
                    }
                  />
                </div>
                <div className="contact-form-input-grid-box w-full mb-2">
                  <InputField
                    name="budget"
                    type="text"
                    id="budget"
                    placeholder="e.g. £4000"
                    value={data.budget}
                    error={dataErrors.budget}
                    onChange={handlesendDataChange}
                    htmlFor="budget"
                    labeltextItem={true}
                    labelText="Budget"
                  />
                </div>
                {/* <div className="contact-form-input-grid-box w-full mb-2">
                  {/* ======= *
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

                  {/* ========= *
                </div> */}
                {/* <div className="contact-form-input-grid-box w-full mb-2">
                  <TextArea
                    htmlFor="desc"
                    id="desc"
                    name="desc"
                    value={data.desc}
                    error={dataErrors.desc}
                    onChange={handlesendDataChange}
                    placeholder="Start Typing Here..."
                    labeltextItem={true}
                    labelText="Message/Query"
                  />
                </div> */}
                <div className="submite-btn-box mt-5 flex flex-col-reverse gap-4">
                  {success && !loading && <p className="block">{success}</p>}
                  <button
                    type="submit"
                    className="next-steps-button glow-button block max-w-[158px] w-full"
                  >
                    <span className=" py-[15px] px-[19px]">
                      {loading ? "Loading..." : "Get Your Offer"}
                    </span>
                    <div className="gradient"></div>
                  </button>

                  {loading ? <SendStatesLoader /> : ""}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPCLandingBanner;
