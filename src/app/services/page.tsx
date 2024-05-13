import ServicesPage from "@/pageComponents/v3/services/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
	description:
		"We innovate and create at the intersection of digital, advertising and design to provide the best possible impact for our clients & partners. Web Development, PPC, UX Design, Motion Design, SEO, Content Strategy, Social Media, Branding, App Development",
};
export default function page() {
	return <ServicesPage />;
}
