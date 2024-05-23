import DrJohnTsagiris from "@/pageComponents/v3/DrJohnTsagaris/drjohn";
import PortfolioV3 from "@/pageComponents/v3/Portfolio/portfolio";
import SoulfullHealth from "@/pageComponents/v3/SoulfullHealth/soulfull";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Dr John Tsagiris",
  description: "Dr. John Tsagaris, a pioneer in holistic beauty and founder of the Acuskinlift Method, sought to rejuvenate the online presence of his brand, Dr. John Tsagaris. With a mission to optimise the ageless wellness journey of his clientele, Dr. Tsagaris pictured a digital platform that reflected his transformative natural skin tightening and lifting techniques.",
};
export default function page() {
  return (
    <>
      <DrJohnTsagiris />
    </>
  );
}
