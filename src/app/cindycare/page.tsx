import type { Metadata } from "next";
import CindyCare from '../../pageComponents/v3/CindyCare/cindycare';

export const metadata: Metadata = {
  title: "Portfolio | CindyCare",
  description:
    "Cindy Care, an upcoming home care agency, aims to  transform the landscape of live-in care services for high-class clientele in Bedfordshire, Buckinghamshire, Northamptonshire, and beyond. Founded with a commitment to providing premium yet affordable care, Cindy Care aims to exceed expectations and redefine the standards of elderly care, by offering personalised services tailored to each client's needs.",
};
export default function page() {
  return (
    <>
      <CindyCare />
    </>
  );
}
