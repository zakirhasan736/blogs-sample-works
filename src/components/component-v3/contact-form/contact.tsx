"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [success, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(18);

  const services = [
    "Web & App Development",
    "UX/UI Design",
    "Branding",
    "PPC",
    "SEO",
    "Motion Graphic",
  ];

  const industries = [
    "Agriculture",
    "Automotive",
    "Banking",
    "Construction",
    "Education",
    "Energy",
    "Entertainment",
    "Fashion",
    "Food and Beverage",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Insurance",
    "Manufacturing",
    "Mining",
    "Pharmaceuticals",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation",
    "Utilities",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    service: "",
    industry: "",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formSubmitted) {
      timer = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [formSubmitted]);

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

    // If there are errors, stop loading and return
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }
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
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        if (responseData.status === 200) {
          setData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            message: "",
            service: "",
            industry: "",
          });
          setSelectedValues([]);
          setSuccessMessage(
            "Thank you for your submission. We will be in touch soon."
          );
          setFormSubmitted(true);
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

  return (
    <>
      {formSubmitted && (
            <div className="confirmation-msn mt-[88px]">
              <Image src="/images/con-check.svg" alt="Check" width={16} height={16} />
              <p className=" mb-[6px] mt-3  text-[18px] font-normal leading-[28px]">
                Thank you for your enquiry,
                <br />
                <br />
                We will be in touch soon.
              </p>
            </div>
      )}

      {!formSubmitted && (
        <form onSubmit={(e) => handleSubmitMessage(e)}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="firstName">First name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="lastName">Last name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="email">Email address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={data.contactNumber}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="contactNumber">Contact number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <select
                name="service"
                value={data.service}
                onChange={handleChange}
                required
                className="scrollable-dropdown"
              >
                <option value=""></option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="underline"></div>
              <label htmlFor="service">Service</label>
            </div>
            <div className="input-data">
              <select
                name="industry"
                value={data.industry}
                onChange={handleChange}
                required
                className="scrollable-dropdown"
              >
                <option value=""></option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <div className="underline"></div>
              <label htmlFor="industry">Industry</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor="message">How can we help?</label>
              <br />
            </div>
          </div>
          {/* Display success message */}
          {success && !loading && <p>{success}</p>}
          {/* Submit button */}
          <button className={`btn ${className}`} type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
