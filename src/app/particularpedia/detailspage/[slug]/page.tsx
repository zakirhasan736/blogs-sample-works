import ParticularpediaDeatailsPage from "@/pageComponents/v3/particularpedia/pediadetailspage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Particular Agency | Particularpedia",
	description: "Particularpedia details term",
};
export default function page() {
	return (
		<div>
			<ParticularpediaDeatailsPage />
		</div>
	);
}
