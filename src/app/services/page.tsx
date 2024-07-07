import ServicesPage from "@/pageComponents/v3/services/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Particular Agency in London",
  description:
    "A London agency specialising in branding and marketing. Our Services - Web Development & SEO, UX Design, Branding & Strategy and PPC Advertising.",
};
export default function page() {
  return <ServicesPage />;
}
