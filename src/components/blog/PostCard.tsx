import React from 'react';
import Link from 'next/link';
import { Post } from '@/types';
import { urlForImage } from '@/sanity/lib/image';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block transform transition-transform hover:scale-[1.015]">
      <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white">
        <div className="relative w-full max-h-[260px] aspect-[3/2] overflow-hidden">
          {post.mainImage ? (
            <>
              <img
                src={urlForImage(post.imageURL).width(800).height(533).url()}
                alt={post.title}
                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-400/50 via-black/20 to-transparent z-10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gray-200" />
          )}
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {post.categories?.map((category) => (
              <span
                key={category._id}
                className="text-xs font-medium bg-brand-100 text-brand-700 px-2 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1 transition-opacity duration-300 group-hover:opacity-80">
            {formatDate(post._createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}
