import BurnHard from "@/pageComponents/v3/BurnHard/burnhard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Burn Hard",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <BurnHard />
    </>
  );
}
