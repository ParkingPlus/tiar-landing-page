// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery } from "@/sanity/lib/queries";
import { getPost } from "@/sanity/lib/fetch";
import BlogPost from "@/components/blog/BlogPost";

export const revalidate = 60; // Revalidate every 60 seconds

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Tiar Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const paths = await sanityFetch<{ slug: string }[]>({
    query: postPathsQuery,
    tags: ['post'],
  });

  return paths.map((path) => ({
    slug: path.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <BlogPost post={post} />;
}