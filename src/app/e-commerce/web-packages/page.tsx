import WebPackages from "@/pageComponents/v3/WebPackages/web-package";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web Packages",
  description:
    "Particular Agency | Web Packages",
};
export default function page() {
  return <WebPackages />
}
