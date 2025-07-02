// app/blog/[slug]/page.tsx
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery } from "@/sanity/lib/queries";
import { getPost } from "@/sanity/lib/fetch";
import BlogPost from "@/components/blog/BlogPost";
import { Post } from "@/types";


export async function generateStaticParams() {
  const paths = await sanityFetch<{ params: { slug: string } }[]>({
    query: postPathsQuery,
    tags: ['post'],
  });

  return paths;
}

export default async function BlogPostPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug || "";
  const post = await getPost(slug);

  return <BlogPost post={post} />;
}