import { getCategories, getPosts } from "@/sanity/lib/fetch";
import { POSTS_PER_PAGE } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PostsList from "@/components/blog/PostsList";
import Pagination from "@/components/common/Pagination";
import BlogFilters from "@/components/blog/BlogFilters";

export const revalidate = 60;

type Props = {
  params: { category: string };
  searchParams: { page?: string; search?: string };
};

export async function generateStaticParams() {
  // No longer need to pass isBuildTime
  const categories = await getCategories();
  return categories.map((cat) => ({
    category: cat.slug?.current || "",
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // No longer need to pass isBuildTime
    const categories = await getCategories();
    const category = categories.find(cat => cat.slug?.current === params.category);

    if (!category) {
        return {
            title: "Category not found",
        }
    }

    return {
        title: `${category.title} | Tiar Blog`,
        description: `Browse articles in the ${category.title} category.`,
    };
}

export default async function BlogCategoryPage({ params, searchParams }: Props) {
    const page = Number(searchParams.page) || 1;
    const search = searchParams.search || '';
    const { category: categorySlug } = params;

    // All calls to getCategories are now safe
    const allCategories = await getCategories();
    const currentCategory = allCategories.find(cat => cat.slug?.current === categorySlug);

    if (!currentCategory) {
        notFound();
    }

    const { posts, total } = await getPosts({
        page,
        category: categorySlug,
        search,
        postsPerPage: POSTS_PER_PAGE,
    });

    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
        <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-brand-500">{currentCategory.title}</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    {currentCategory.description || `Articles in the ${currentCategory.title} category.`}
                </p>
            </header>
            
            <BlogFilters categories={allCategories} />

            <PostsList posts={posts} />

            {totalPages > 1 && (
                <div className="mt-12">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={page}
                        basePath={`/blog/${categorySlug}`}
                    />
                </div>
            )}
        </div>
    );
}
