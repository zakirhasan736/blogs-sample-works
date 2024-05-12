"use client";
import React from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <form>
      <div className="form-row">
        <div className="input-data">
          <input type="text" required />
          <div className="underline"></div>
          <label htmlFor="">First name</label>
        </div>
        <div className="input-data">
          <input type="text" required />
          <div className="underline"></div>
          <label htmlFor="">Last name</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" required />
          <div className="underline"></div>
          <label htmlFor="">Email address</label>
        </div>
        <div className="input-data">
          <input type="text" required />
          <div className="underline"></div>
          <label htmlFor="">Contact number</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <select name="service" required>
            <option value=""></option>
            <option value="branding">Branding</option>
            <option value="web-dev">Web Development</option>
          </select>
          <div className="underline"></div>
          <label htmlFor="">Service</label>
        </div>
        <div className="input-data">
          <select name="industry" required>
            <option value=""></option>
            <option value="Technology">Technology</option>
            <option value="Travels">Travels</option>
          </select>
          <div className="underline"></div>
          <label htmlFor="">Industry</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data textarea">
          <textarea required></textarea>
          <br />
          <div className="underline"></div>
          <label htmlFor="">How can we help?</label>
          <br />
        </div>
      </div>
      <button className={`btn ${className}`} type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
