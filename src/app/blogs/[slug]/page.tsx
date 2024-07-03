import NotFound from "@/app/not-found";
import BlogsPage from "@/pageComponents/v3/blogs/blogs-single";

async function fetchBlogs(params: any) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const res = await fetch(
      `https://www.agency.byparticular.com/backend/api/blogs?populate=*&${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Blogs data not found");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return null;
  }
}

export async function generateMetadata({ params }: any) {
  const blogs = await await fetchBlogs(
    `filters[slug][$eq]=${params.slug}`
  );
  const blog = blogs.data[0].attributes;

  if (!blog) {
    return <NotFound />;
  }
  const { pageTitle, pageDescription } = blog;

  return {
    title: pageTitle,
    description: pageDescription,
  };
}

const page = async (props: any) => {
  const blogs = await await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);
  const blog = blogs.data[0].attributes;

  if (!blog) {
    return <NotFound />;
  }

  return (
    <>
      <BlogsPage data={blog} />
    </>
  );
};

export default page;
