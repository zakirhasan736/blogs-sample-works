import ContactVersionThree from "@/pageComponents/v3/Contacts/contacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Particular Agency ",
  description:
    "Contact Us - Please send all queries or support requests on the email mentioned below. Call us or book in a video discovery call with us today. ",
};
export default function page() {
  return (
    <>
      <ContactVersionThree />
    </>
  );
}
