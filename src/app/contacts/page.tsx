import ContactPage from "@/pageComponents/Contacts/contact-page-v2";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Ready to elevate your digital presence? Contact us today! Our page provides easy ways to get in touch with our expert digital marketing team. Whether it's for SEO, PPC, Web Design, or a bespoke marketing strategy, we're here to help your business succeed. Reach out for a consultation or any queries you have",
};
export default function page() {
	return <ContactPage />;
}
