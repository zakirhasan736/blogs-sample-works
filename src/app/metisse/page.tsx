import Metisse from "@/pageComponents/v3/Metisse/metisse";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Metisse",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <Metisse />
    </>
  );
}
