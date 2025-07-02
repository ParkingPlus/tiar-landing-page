'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Category } from '@/types';
import Search from '@/components/common/Search'; // Import the new Search component

interface BlogFiltersProps {
  categories: Category[];
}

export default function BlogFilters({ categories }: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === 'all') {
        router.push('/blog');
    } else {
        router.push(`/blog/category/${categorySlug}`);
    }
  };
  
  // Extract the current category slug from the pathname
  const pathParts = pathname.split('/');
  const currentCategorySlug = pathParts[3] && pathParts[1] === 'blog' ?   pathParts[3] : 'all';

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* The new Search component replaces the old Input field */}
      <Search />
      
      <div className="flex gap-4">
        <Select
          value={currentCategorySlug}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat._id} value={cat.slug?.current || 'default'}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
