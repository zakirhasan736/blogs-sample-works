import React, { useState } from "react";
import InputField from "../InputField";
import InputCountryNumberSelect from "@/components/elements/country-select/input-country-number-select";
import SelectItemWithSearch from "@/components/elements/dropdown/select-item-with-search";

type Props = {};

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
];

const PersonalInfo = (props: Props) => {
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

  const handleSelectedserviceItemsChange = (selectedItems: string) => {
    setData({
      ...data,
      serviceType: selectedItems,
    });
  };

  const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any = {};
    const phoneRegex = /^\+\d{1,4}\d{1,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmty = (input: any) => (input === "" ? true : false);
    
    if (isEmty(data.fullName)) {
      errors.fullName = "First name is required";
    }
    if (isEmty(data.call)) {
      errors.call = "Phone number is required";
    } else if (!phoneRegex.test(data.call)) {
      errors.call = "Phone number should be  digits only";
    }
    if (isEmty(data.email)) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email should be a valid email address";
    }
    if (isEmty(data.serviceType)) {
      errors.serviceType = "service type is required";
    }
    setDataErrors({ ...dataErrors, ...errors });

    if (Object.keys(errors).length === 0) {
    } else {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmitMessage}
      className="contact-form-box steps-form-wrap w-full"
    >
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
            items={serviceTypes.map((service) => service.label)}
            placeholder="Select Services"
            SearchPlaceholder="Search Services"
            labeltextItem={true}
            labelText="Services"
            onSelectedItemsChange={handleSelectedserviceItemsChange}
          />

          {/* ========= */}
        </div>
        <button type="submit" className="next-steps-button glow-button">
          <span className="py-[15px] px-[19px]">Proceed to Next Step</span>
          <div className="gradient"></div>
        </button>
      </div>
    </form>
  );
};
