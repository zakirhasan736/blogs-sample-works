import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image} from '@packages/packages';
const ClientSlider = () => {
      const settings = {
				speed: 3000,
				autoplay: true,
				autoplaySpeed: 0,
				centerMode: true,
				centerPadding: "60px",
				cssEase: "linear",
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				infinite: true,
				initialSlide: 1,
				arrows: false,
				buttons: false,
			};
  return (
		<div className="banner-client-brand-box pb-[73px] max-w-[1004px] mx-auto overflow-hidden">
			<div className="client-brand-box opacity-20">
				<Slider {...settings}>
					<div className="client-brand-item">
						<Image src="/images/client-logo-1.svg" width={72} height={65} alt="client brand logo" />
					</div>
					<div className="client-brand-item">
						<Image src="/images/client-logo-2.svg" width={132} height={78} alt="client brand logo" />
					</div>
					<div className="client-brand-item">
						<Image src="/images/client-logo-3.svg" width={142} height={92} alt="client brand logo" />
					</div>
					<div className="client-brand-item">
						<Image src="/images/client-logo-4.svg" width={174} height={88} alt="client brand logo" />
					</div>
					<div className="client-brand-item">
						<Image src="/images/client-logo-5.svg" width={120} height={55} alt="client brand logo" />
					</div>
				</Slider>
			</div>
		</div>
	);
}

export default ClientSlider
