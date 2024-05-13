import DrJohnTsagiris from "@/pageComponents/v3/DrJohnTsagaris/drjohn";
import PortfolioV3 from "@/pageComponents/v3/Portfolio/portfolio";
import SoulfullHealth from "@/pageComponents/v3/SoulfullHealth/soulfull";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Dr John Tsagiris",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <DrJohnTsagiris />
    </>
  );
}
