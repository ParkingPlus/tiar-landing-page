'use client';

import { useState, useEffect, useCallback } from 'react';
import { Post } from '@/types';
import { getPosts } from '@/sanity/lib/fetch';
import { useDebouncedCallback } from 'use-debounce';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from '../ui/input';
import { SearchIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchResults = useCallback(async (searchQuery: string) => {
    if (searchQuery.length > 1) {
      const { posts } = await getPosts({ search: searchQuery, postsPerPage: 10 });
      setResults(posts);
    } else {
      setResults([]);
    }
  }, []);

  const debouncedFetchResults = useDebouncedCallback(fetchResults, 300);

  useEffect(() => {
    debouncedFetchResults(query);
  }, [query, debouncedFetchResults]);

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };
  
  const clearSearch = () => {
    setQuery('');
    setResults([]);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="w-full sm:w-64 h-10 px-3 flex items-center gap-2 border border-gray-300 rounded-md cursor-pointer text-gray-500 hover:border-gray-400 transition-colors">
          <SearchIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-500">Search articles...</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 bg-brand-50">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className='p-6'>
          <DialogHeader>
            <div className="relative bg-brand-50 rounded-lg">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search for articles, news, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-10 h-12 text-lg"
              />
              {query && (
                <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-5 w-5 text-gray-500 hover:text-gray-800" />
                </button>
              )}
            </div>
          </DialogHeader>
          <div className="mt-6">
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map((post) => (
                  <li key={post._id}>
                    <Link 
                      href={`/blog/${post.slug.current}`} 
                      onClick={handleResultClick}
                      className="block p-4 rounded-lg hover:bg-brand-200 transition-colors"
                    >
                      <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
                      <p className="text-gray-600 mt-1 line-clamp-2">{post.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              query.length > 1 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found for &quot;{query}&quot;</p>
                </div>
              )
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 