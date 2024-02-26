
import ArticlesPage from "@/pageComponents/Articles-page/articles-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Articles - Particular Agency London",
	description:
		"Explore expert insights and cutting-edge strategies from our digital marketing gurus. Dive into our latest articles to boost your online presence, drive engagement, and skyrocket sales. Click to unlock the secrets of successful digital marketing today",
};
export default function page() {
	return <ArticlesPage />;
}
