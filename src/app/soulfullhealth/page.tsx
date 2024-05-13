import PortfolioV3 from "@/pageComponents/v3/Portfolio/portfolio";
import SoulfullHealth from "@/pageComponents/v3/SoulfullHealth/soulfull";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Soulfull Health",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <SoulfullHealth />
    </>
  );
}
