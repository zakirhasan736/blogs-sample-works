import KnightsAcademy from "@/pageComponents/v3/KnightsAcademy/kacademy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Rushmoor Knights Academy",
  description:
    "Rushmoor Knights Academy is dedicated to elevating youth American football in the UK, bringing well-deserved attention to the industry and fostering increased facilitation. Their mission is to elevate the sport's standards by transitioning youth programs and facilitating skill development. To achieve this, they aimed to build an established online presence and revamp the market through innovative digital solutions",
};
export default function page() {
  return (
    <>
      <KnightsAcademy />
    </>
  );
}
