import type { Metadata } from "next";
import SeoPage from '../../pageComponents/v3/seo/seo';

export const metadata: Metadata = {
  title: "Branding | Particular Agency",
  description: "Seo",
};
export default function page() {
  return (
    <>
    <SeoPage />
    </>
  );
}
