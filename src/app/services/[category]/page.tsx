import NotFound from "@/app/not-found";
import ServicesCategoriesPage from "@/pageComponents/Services/Services-details/ServicesCategory";

async function getData(category: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/data/services/new-services-data/${category}.json`,
      {
        next: { revalidate: 10 },
      }
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

export async function generateStaticParams() {
  // Fetch or define all categories that need to be statically generated
  // Replace this with your actual categories fetching logic if needed
  const categories = ["category1", "category2", "category3"]; // Example categories

  return categories.map((category) => ({
    category,
  }));
}

const Page = async ({ params }: any) => {
  const category = params.category;
  const data = await getData(category);
  if (!data) {
    return <NotFound />;
  }

  return <ServicesCategoriesPage data={data} />;
};

export default Page;
