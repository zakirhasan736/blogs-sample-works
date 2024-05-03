"use client";

import Image from "next/image";
import React from "react";

const ContactSec= () => {
  return (
    <section className="contact-sec">
      <Image
        src="/images/contact.jpg"
        alt="Contact Image"
        width={710}
        height={600}
      />
      <div className="contact-form pt-[74px] pb-[50px] sm:pt-[40px] sm:px-8">
        <h3>Ready to get started?</h3>
        <p>Fast track your growth with Particular </p>
        <form className="pr-[176px]">
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
              <select name="service">
                <option value=""></option>
                <option value="branding">Branding</option>
                <option value="web-dev">Web Development</option>
              </select>
              <div className="underline"></div>
              <label htmlFor="">Service</label>
            </div>
            <div className="input-data">
              <select name="industry">
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
          <button className="btn btn-dark" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSec;