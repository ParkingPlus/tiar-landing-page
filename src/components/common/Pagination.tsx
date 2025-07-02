'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({ totalPages, currentPage, basePath }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${basePath}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    // Always show the first page
    pageNumbers.push(
      <PaginationItem key={1}>
        <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      pageNumbers.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
    }

    // Show pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
    }

    // Always show the last page
    if (totalPages > 1) {
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={createPageURL(totalPages)} isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)} className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined} />
        </PaginationItem>
        
        {renderPageNumbers()}
        
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} className={currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined}/>
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
} 