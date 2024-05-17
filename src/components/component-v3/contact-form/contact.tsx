"use client";
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
          setSuccessMessage("Message sent successfully!");
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
        <div className="final-steps">
          <div className="confirmationcard-item flex items-start gap-[10px]">
            <div className="confirmation-check-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
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
                Your Query has been submitted successfully, and one of our
                Agents will contact you shortly to discuss further.
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
