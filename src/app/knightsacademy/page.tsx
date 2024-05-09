import KnightsAcademy from "@/pageComponents/v3/KnightsAcademy/kacademy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Rushmoor Knights Academy",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <KnightsAcademy/>
    </>
  );
}
