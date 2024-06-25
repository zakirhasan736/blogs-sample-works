"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ContactForm from "../contact-form/contact";
import { motion, useInView } from "framer-motion";

const ContactSec = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    // triggerOnce: true,
    // threshold: 0.1,
  });

  return (
    <motion.section
      className="contact-sec bg-white"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1} : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-sec-wrappr h-full max-w-[1920px] w-full mx-auto grid gap-[90px] md:gap-[45px] sm:gap-[30px] grid-cols-12 sm:grid-cols-6">
        <motion.div
          className="contact-modal-box w-full h-full col-span-6 md:col-span-5 sm:col-span-6"
          initial={{ opacity: 0}}
          animate={isInView ? { opacity: 1} : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/contact.png"
            alt="Contact Image"
            width={710}
            className="w-full object-cover"
            height={600}
          />
        </motion.div>
        <motion.div
          className="contact-form col-span-6 md:col-span-7 sm:col-span-6 pt-[74px] sm:pt-0 pb-[50px] md:pt-[40px] sm:py-8 pr-[176px] lg:pr-[25px] md:pr-[20px] sm:px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="mb-2">Ready to get started?</h3>
          <p>Fast track your growth with Particular</p>
          <ContactForm className="btn-dark" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSec;
