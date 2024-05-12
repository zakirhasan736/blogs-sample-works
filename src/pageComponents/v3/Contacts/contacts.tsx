"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactVersionThree = () => {
  return (
    <section className="custom-container contacts contact-sec sm:px-8 grid grid-cols-12 sm:grid-cols-6 gap-5">
      <div className="lg:px-8 col-span-6">
        <h2>Get in touch</h2>
        <p className="text-lg">
          Fill in the form below, and we’ll be in touch.
        </p>
        <div className="sm:hidden">
          <div className="mt-[65px]">
            <h6 className="text-text-extra-small mb-2 uppercase">
              Help And Support?
            </h6>
            <p className="text-sm">
              Please send us all queries or support requests on the email
              mentioned below. <br />
              <Link href="mailto:info@byparticular.com">
                info@byparticular.com
              </Link>
            </p>
          </div>
          <div className="mt-[41px]">
            <h6 className="text-text-extra-small mb-2 uppercase">
              Ready To Go? Call Us
            </h6>
            <p className="text-sm">
              Speak to us Mon - Fri from 9am to 6pm on <br />
              <Link href="mailto:+4402080682102">+44 (0) 208 068 2102</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form sm:px-8 col-span-6">
        <form className="">
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
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="hidden sm:block px-8">
        <div className="mt-[65px]">
          <h6 className="text-text-extra-small mb-2 uppercase">
            Help And Support?
          </h6>
          <p className="text-sm">
            Please send us all queries or support requests on the email
            mentioned below. <br />
            <Link href="mailto:info@byparticular.com">
              info@byparticular.com
            </Link>
          </p>
        </div>
        <div className="mt-[41px]">
          <h6 className="text-text-extra-small mb-2 uppercase">
            Ready To Go? Call Us
          </h6>
          <p className="text-sm">
            Speak to us Mon - Fri from 9am to 6pm on <br />
            <Link href="mailto:+4402080682102">+44 (0) 208 068 2102</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactVersionThree;
