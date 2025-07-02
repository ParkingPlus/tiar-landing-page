import { POSTS_PER_PAGE } from "@/sanity/lib/queries";
import { Metadata } from "next";
import PostsList from "@/components/blog/PostsList";
import BlogFilters from "@/components/blog/BlogFilters";
import Pagination from "@/components/common/Pagination";
import { getCategories, getPosts } from "@/sanity/lib/fetch";

// This page is now static and uses ISR
export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
    title: "TIAR Blog",
    description: "Insights, news, and stories from the team at TIAR.",
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
    sortBy?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams.page) || 1;
  const category = searchParams.category || 'all';
  const sortBy = searchParams.sortBy || 'newest';

  // Fetch all posts (newest first by default) and all categories
  const [{ posts, total }, categories] = await Promise.all([
    getPosts({ page, category, sortBy, postsPerPage: POSTS_PER_PAGE }),
    getCategories(),
  ]);
  
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-2 py-12 lg:px-16 md:py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">TIAR Blog</h1>
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
                    currentPage={page}
                    basePath="/blog"
                />
            </div>
        )}
    </div>
  );
}
