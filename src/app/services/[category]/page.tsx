import NotFound from "@/app/not-found";
import ServicesCategoriesPage from "@/pageComponents/Services/Services-details/ServicesCategory";

async function getData(category: any) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/data/services/new-services-data/${category}.json`,
			{
				next: { revalidate: 10 },
			},
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
			<ServicesCategoriesPage data={data} />
		</>
	);
};

export default page;
