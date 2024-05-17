import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const ClientSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    variableWidth: true,
    slidesToShow: 4,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="banner-client-brand-box pb-[73px]  sm:pb-[33px]  max-w-[1004px] mx-auto overflow-hidden h-[120px]">
      <div className="client-brand-box opacity-20">
        <Slider {...settings}>
          <div className="client-brand-item sm:!w-[150px]">
            <Image
              src="/images/client-logo-3.svg"
              width={142}
              height={92}
              alt="client brand logo"
            />
          </div>
          <div className="client-brand-item sm:!w-[150px]">
            <Image
              src="/images/brand-trade.svg"
              width={142}
              height={92}
              alt="client brand logo"
            />
          </div>
          <div className="client-brand-item sm:!w-[150px]">
            <Image
              src="/images/client-logo-4.svg"
              width={174}
              height={88}
              alt="client brand logo"
            />
          </div>
          <div className="client-brand-item sm:!w-[150px]">
            <Image
              src="/images/brand-soulfull.svg"
              width={132}
              height={78}
              alt="client brand logo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
