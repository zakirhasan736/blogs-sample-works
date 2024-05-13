"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/common/faq-accordion/faq-accordion";
import ServiceDetailsData from "@data/servicesDetailsData/servicesDetailsData.json";

const OFFSET = 50; // Offset in pixels

const ServiceDetailsItem: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const serviceItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const dataIndexItemsRef = useRef<(HTMLElement | null)[]>([]);

  const toggleFaqModal = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleServiceItemClick = (index: number) => {
    // Remove active class from the currently active item
    const currentActiveItem = serviceItemsRef.current[activeServiceIndex];
    if (currentActiveItem) {
      currentActiveItem.classList.remove("active");
    }

    // Add active class to the clicked service item
    const clickedItem = serviceItemsRef.current[index];
    if (clickedItem) {
      clickedItem.classList.add("active");
    }

    // Scroll to the corresponding service details
    const serviceDetail = dataIndexItemsRef.current[index];
    if (serviceDetail) {
      serviceDetail.scrollIntoView({ behavior: "smooth" });
    }

    // Update the active service index
    setActiveServiceIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + OFFSET; // Apply offset
      const windowHeight = window.innerHeight;

      let currentActiveIndex = -1;

      for (let i = 0; i < dataIndexItemsRef.current.length; i++) {
        const item = dataIndexItemsRef.current[i];
        if (item) {
          const itemRect = item.getBoundingClientRect();
          if (itemRect.top - OFFSET <= windowHeight && itemRect.bottom >= 0) {
            // Apply offset
            currentActiveIndex = i;
            break;
          }
        }
      }

      setActiveServiceIndex(currentActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="services-page-wrapper-cont gap-5 sm:gap-10 flex items-start pb-[24px] sm:pb-[20px] sm:flex-col">
      <div className="services-left-cont  w-full sticky sm:relative sm:top-0 top-10 max-w-[272px] md:max-w-[200px] sm:max-w-full">
        <h3 className="services-title mb-4 text-mono-60 font-accent font-normal !text-[16px] text-left leading-[120%] tracking-[2.4px] uppercase">
          SERVICES
        </h3>
        <ul className="services-list-items flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          {ServiceDetailsData.map((service, index) => (
            <li
              key={index}
              ref={(el) => (serviceItemsRef.current[index] = el)}
              className={`services-list ${activeServiceIndex === index ? "active" : ""}`}
              onClick={() => handleServiceItemClick(index)}
            >
              {/* <a href={`#service-${index}`}> */}
              <button
                className="services-item-btn hover:underline hover:font-semibold transition-all ease-in-out text-[16px] text-left text-mono-100 font-accent  leading-[150%] active:underline active:font-medium"
                type="button"
              >
                {service.title}
              </button>
              {/* </a> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="services-right-cont  w-full">
        {ServiceDetailsData.map((service, index) => (
          <div
            key={index}
            data-index={index}
            // id={`service-${index}`}
            ref={(el) => (dataIndexItemsRef.current[index] = el)}
            className="services-items-details-box pb-[55px] sm:pb-[35px]"
          >
            <div className="services-modal-box relative mb-6 max-w-[864px] h-[217px] rounded-[4px]">
              {service.hasVideo ? (
                <video
                  autoPlay={true}
                  muted
                  loop
                  className="z-0 w-full h-full object-cover rounded-[4px]"
                >
                  <source
                    src={`/images/services/${service.videoPath}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={`/images/services/${service.imagePath}`}
                  alt="services modal image"
                  className="h-full w-full sm:object-cover"
                  width={864}
                  height={217}
                />
              )}
              <div className="modal-box-overlyn-items absolute w-full h-full left-0 top-0 bg-[rgba(24,23,37,0.60)] flex items-center justify-center">
                <Link
                  href="/contacts"
                  className="py-2 px-4 bg-white rounded-[4px] text-[14px] text-center text-mono-100 font-accent font-normal leading-[120%] h-[48px] flex items-center justify-center  max-w-[110px] w-full"
                >
                  Get services
                </Link>
              </div>
            </div>
            <div className="services-item-title-box flex items-center justify-between gap-[30px] mb-[18px]">
              <h4 className="services-item-title text-black">
                {service.title}
              </h4>
              <button
                type="button"
                className="services-faq-popup-button underline text-[#1A1A1A]"
                onClick={() => toggleFaqModal(index)}
              >
                FAQs
              </button>
            </div>
            <p className="services-item-desc max-w-[691px] w-full text-[14px] text-left font-normal font-accent leading-[150%] text-mono-100 mb-4">
              {service.description}
            </p>
            <div className="services-item-service-includes">
              <h5 className="services-includes-title mb-4 text-mono-60 text-left text-[14px] font-accent font-normal uppercase tracking-[2.1px] leading-[120%]">
                SERVICE includes:
              </h5>
              <div className="services-includes-lists-grid flex items-start gap-[53px] sm:gap-[35px] sm:flex-col">
                {service.includes.map((include, includeIndex) => (
                  <ul
                    key={includeIndex}
                    className="services-includes-lists-item pl-5 flex flex-col gap-[2px]"
                  >
                    {include.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="services-includes-list text-black text-[14px] text-left font-normal font-accent leading-[150%] !list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            {/* faq popup screens */}
            <div
              className={`faq-popup-wrapper fixed top-0 z-[99999] right-0 w-full h-full bg-[rgba(26,26,26,0.50)] ${openFaqIndex === index ? "" : "hidden"}`}
            >
              <div className="faq-popups-main-wrap max-w-[597px] min-h-[100vh] overflow-hidden overflow-y-scroll pt-[72px] pb-[45px] pl-8 pr-9 sm:px-4 ml-auto mr-0 w-full h-full bg-[#D9D9D9]">
                <div className="faq-popups-heading-box flex items-start justify-between w-full">
                  <div className="faq-heading-title-box">
                    <h3 className="text-black mb-2">FAQs</h3>
                    <h4 className="service-title text-[12px] text-left text-Mono-70 font-accent font-normal tracking-[1.8px] uppercase leading-[120%]">
                      {service.title}
                    </h4>
                  </div>
                  <button
                    className="close-btn text-mono-100 py-[5px] px-[10px] text-[14px] font-medium font-accent rounded-[4px] border border-mono-100 relative top-[-25px]"
                    onClick={() => toggleFaqModal(index)}
                  >
                    Close
                  </button>
                </div>

                <div className="faq-accordion-box mt-[56px] sm:mt-[35px]">
                  <FaqAccordion faqs={service.faqs} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsItem;
