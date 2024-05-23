import Metisse from "@/pageComponents/v3/Metisse/metisse";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Metisse",
  description:
    "Metisse, a ambitious watch brand led by Noura, aimed to disrupt the watch industry with innovative designs targeting women aged 16-35 in the UK.",
};
export default function page() {
  return (
    <>
      <Metisse />
    </>
  );
}
