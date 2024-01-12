import OurApproach from "@/pageComponents/our-approach/our-approch";
import type { NextPage } from "next";

interface Metadata {
	title: string;
	description: string;
}

export default function page() {
  	 const metadata: Metadata = {
				title: "Our Approach",
				description:
					"We encourage Scrutiny and questioning. Then redesign and polishing. And then more questioning. And more polishing. This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.",
			};
  return (
    <OurApproach/>
  )
}
