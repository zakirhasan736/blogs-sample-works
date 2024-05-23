import BurnHard from "@/pageComponents/v3/BurnHard/burnhard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Burn Hard",
  description:
    "Burn Hard, an influential personal training brand spearheaded by its Founder, Bernhard, looked to elevate its online presence to attract affluent clientele and amplify its brand image in the fitness industry",
};
export default function page() {
  return (
    <>
      <BurnHard />
    </>
  );
}
