import type { Metadata } from "next";
import SeoPage from '../../pageComponents/v3/branding/branding';

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
