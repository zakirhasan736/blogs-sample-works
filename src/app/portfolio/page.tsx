import PortfolioV3 from "@/pageComponents/v3/Portfolio/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Particular Agency | Portfolio",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <PortfolioV3 />
    </>
  );
}
