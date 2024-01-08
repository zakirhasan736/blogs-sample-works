import NotFound from "@/app/not-found";
import CaseStudyCategory from "@/pages/CaseStudy/CaseStudyDetails/CaseStudyCategory";

export function generateStaticParams() {
	return [
		{ category: "zenbase" },
		{ category: "ai-and-humanity" },
		{ category: "hult-ib-school" },
		{ category: "knights-academy" },
		{ category: "village-of-genal" },
		{ category: "naeo" },
	];
}

async function getData(category: any) {
	try {
		const res = await fetch(
			`http://localhost:3000/data/case-studies/${category}.json`,
		);

		if (!res.ok) {
			throw new Error("Data not found");
		}

		return res.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
}

export async function generateMetadata({ params }: any) {
	const category = params.category;

	const data = await getData(category);

	if (!data) {
		return <NotFound />;
	}
	const { pageTitle, pageDescription } = data;

	return {
		title: pageTitle,
		description: pageDescription,
	};
}

const page = async ({ params }: any) => {
	const category = params.category;
	const data = await getData(category);
	if (!data) {
		return <NotFound />;
	}

	return (
		<>
			<CaseStudyCategory data={data} />
		</>
	);
};

export default page;
