"use client";

import Image from "next/image";
import React from "react";

const ContactSec = () => {
  return (
    <section className="contact-sec bg-white">
      <div className="contact-sec-wrapper h-full max-w-[1920px] w-full mx-auto grid gap-[90px] md:gap-[45px] sm:gap-[30px] grid-cols-12 sm:grid-cols-6">
        <div className="contact-modal-box w-full h-full col-span-6 md:col-span-5 sm:col-span-6">
          <Image
            src="/images/contact.png"
            alt="Contact Image"
            width={710}
            className="w-full object-cover"
            height={600}
          />
        </div>
        <div className="contact-form col-span-6 md:col-span-7 sm:col-span-6 pt-[74px] pb-[50px] md:pt-[40px] sm:py-8 pr-[176px] lg:pr-[25px] md:pr-[20px] sm:px-4">
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
            <button className="btn btn-dark" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
