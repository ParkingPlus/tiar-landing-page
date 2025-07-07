import { POSTS_PER_PAGE } from "@/sanity/lib/queries";
import { Metadata } from "next";
import PostsList from "@/components/blog/PostsList";
import BlogFilters from "@/components/blog/BlogFilters";
import Pagination from "@/components/common/Pagination";
import { getCategories, getPosts } from "@/sanity/lib/fetch";

// This page is now static and uses ISR
export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
    title: "Tiar Blog",
    description: "Insights, news, and stories from the team at Tiar.",
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string; category?: string; sortBy?: string }> }) {
  const { page = "1", category = "all", sortBy = "newest" } = await searchParams;

  // Fetch all posts (newest first by default) and all categories
  const [{ posts, total }, categories] = await Promise.all([
    getPosts({ page: Number(page), category, sortBy, postsPerPage: POSTS_PER_PAGE }),
    getCategories(),
  ]);
  
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Tiar Blog</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Welcome to our corner of the internet. Here we share insights, news, and stories about the future of sustainable mobility.
            </p>
        </header>
        <BlogFilters categories={categories} />
        <PostsList posts={posts} />
        {totalPages > 1 && (
            <div className="mt-12">
                <Pagination 
                    totalPages={totalPages}
                    currentPage={Number(page)}
                    basePath="/blog"
                />
            </div>
        )}
    </div>
  );
}
