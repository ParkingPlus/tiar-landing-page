import { Post } from '@/types';
import PostCard from './PostCard';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-gray-800">No posts found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </>
  );
} 