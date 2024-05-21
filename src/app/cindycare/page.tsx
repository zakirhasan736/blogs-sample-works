import type { Metadata } from "next";
import CindyCare from '../../pageComponents/v3/CindyCare/cindycare';

export const metadata: Metadata = {
  title: "Portfolio | CindyCare",
  description: "Checkout our Portfolio",
};
export default function page() {
  return (
    <>
      <CindyCare />
    </>
  );
}
