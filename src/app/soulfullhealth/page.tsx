import PortfolioV3 from "@/pageComponents/v3/Portfolio/portfolio";
import SoulfullHealth from "@/pageComponents/v3/SoulfullHealth/soulfull";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Soulfull Health",
  description:
    "Soulfull Health, a rising star thoughtfully-conceived by its Founder, Helen, is soon to launch in the world of women's wellness and aims to reshape the landscape of holistic health for women worldwide",
};
export default function page() {
  return (
    <>
      <SoulfullHealth />
    </>
  );
}
