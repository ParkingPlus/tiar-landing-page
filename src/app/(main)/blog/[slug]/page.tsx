// app/blog/[slug]/page.tsx
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery } from "@/sanity/lib/queries";
import { getPost } from "@/sanity/lib/fetch";
import BlogPost from "@/components/blog/BlogPost";

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug?: { current: string } }[]>({
    query: postPathsQuery,
    tags: ['post'],
  });

  return slugs
    .filter((s) => s.slug?.current)
    .map((s) => ({
      slug: s.slug!.current,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug; 
  const post = await getPost(slug);
  return <BlogPost post={post} />;
}
