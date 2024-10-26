import React from 'react'
import Workshop from "@/components/component-v3/brand-workshope/Workshop/Workshop";
import Overview from "@/components/component-v3/brand-workshope/Overview/Overview";
import Statistic from "@/components/component-v3/brand-workshope/Statistic/Statistic";
import Testimonials from "@/components/component-v3/brand-workshope/Testimonials/Testimonials";
import Limited from "@/components/component-v3/brand-workshope/Limited/Limited";
import GetStarted from "@/components/component-v3/brand-workshope/GetStarted/GetStarted";
const BrandWorkShope = () => {
  return (
		<div className="brand-workshope-wrapper">
			<Workshop />
			<Overview />
			<Statistic />
			<Testimonials />
			<Limited />
			<GetStarted />
		</div>
	);
}

export default BrandWorkShope
