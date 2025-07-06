import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { categoriesQuery, postsByCategoryQuery } from "@/sanity/lib/queries";
import PostsList from "@/components/blog/PostsList";
import { Post } from "@/types";

export const revalidate = 60;

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${category} | Tiar Blog`,
    description: `Articles about ${category}`,
  };
}

export async function generateStaticParams() {
  const categories = await sanityFetch<{ slug: { current: string } }[]>({
    query: categoriesQuery,
    tags: ['post'],
  });

  return categories.map((category) => ({
    category: category.slug.current,
  }));
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const posts = await sanityFetch<Post[]>({
    query: postsByCategoryQuery,
    params: { category: category },
    tags: ['post'],
  });
  return <PostsList posts={posts} />;
}
