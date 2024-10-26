import ParticularpediaListPage from "@/pageComponents/v3/particularpedia/listpage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Particular Agency | Particularpedia",
	description: "Particularpedia list term",
};
export default function page() {
	return (
		<div>
			<ParticularpediaListPage />
		</div>
	);
}
