
import AboutUsPage from "@/pageComponents/aboutus/aboutus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Particular Agency",
  description:
    "Non-Customer and Customer Experience are undervalued in the UK and beyond. Thoughtfulness is the first step to solving that problem. Think Particular",
};

export default function page() {
	return <AboutUsPage />;
}
 