
import AboutUsPage from "@/pageComponents/aboutus/aboutus";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us - Particular Agency London",
	description:
		"Agency's evolution spans over 15 years, a journey that began when a group of forward-thinking kids first identified the pervasive problem of underwhelming quality in the digital world. From those early days to now, our team has grown into a dedicated group of seasoned professionals, all committed to addressing this challenge head-on.",
};

export default function page() {
	return <AboutUsPage />;
}
 