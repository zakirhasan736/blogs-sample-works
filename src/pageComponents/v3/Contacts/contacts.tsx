"use client";

import ContactForm from "@/components/component-v3/contact-form/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ContactVersionThree = () => {
  return (
    <section className="custom-container contacts contact-sec sm:px-8 grid grid-cols-12 sm:grid-cols-6 gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:px-8 col-span-6"
      >
        <h1>Get in touch</h1>
        <p className="text-lg mt-4">
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
              <Link href="mailto:+4407760286287">+44 (0) 776 028 6287</Link>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
        className="contact-form sm:px-8 col-span-6"
      >
        <ContactForm className="" />
      </motion.div>
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
