// components/BlogPost.tsx
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { Post, Category } from "@/types";
import { urlForImage } from "@/sanity/lib/image";

interface BlogPostProps {
  post: Post;
}

// Custom components for PortableText
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-4">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
        target={value.blank ? '_blank' : '_self'}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value).width(1200).url();
      const altText = value.alt || "Blog image";

      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={altText}
            width={1200}
            height={600}
            className="rounded-md shadow-md object-cover w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-center text-gray-500 mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
  },
};

export default function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post._createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="min-h-screen lg:px-12 bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {post.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            {post.authorName && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{post.authorName}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post._createdAt}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {post.imageURL && (
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
          <Image
            src={post.imageURL}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {post.body ? (
            <div className="prose prose-lg prose-gray max-w-none">
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No content available for this post.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Categories Footer */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Filed Under
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/blog/category/${category.slug?.current}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}