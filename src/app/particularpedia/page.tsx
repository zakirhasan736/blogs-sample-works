import Particularpedia from "@/pageComponents/v3/particularpedia/particularpedia";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Particular Agency | Particularpedia",
	description: "Checkout our Particularpedia",
};
export default function page() {
	return (
		<div>
			<Particularpedia />
		</div>
	);
}
