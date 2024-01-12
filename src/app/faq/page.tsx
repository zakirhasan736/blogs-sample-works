import Faq from "@/pageComponents/Faq/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ",
	description:
		"Find answers to all your digital marketing questions on our FAQ page. From SEO and PPC to social media strategies, our comprehensive FAQs provide insights into our services, processes, and how we can help grow your business online. Get informed and start your digital success journey with us today",
};
export default function page() {
	return <Faq />;
}
