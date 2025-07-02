import React from 'react';
import Link from 'next/link';
import { Post } from '@/types';
import { urlForImage } from '@/sanity/lib/image'; // Assuming you have an image helper
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[500px]">
          <div className="relative w-full" style={{ paddingTop: '66.66%' }}> {/* 3:2 Aspect Ratio */}
            {post.mainImage ? (
              <>
                <img
                  src={urlForImage(post.imageURL).width(800).height(533).url()}
                  alt={post.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-400/50 to-transparent pointer-events-none z-10" />
              </>
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200" />
            )}
          </div>
          <div className="p-6 bg-white">
          <div className="flex items-center gap-2 mb-2">
            {post.categories?.map(category => (
              <span key={category._id} className="text-xs font-semibold bg-brand-100 text-brand-700 px-2 py-1 rounded-full">
                {category.title}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            {formatDate(post._createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
} 