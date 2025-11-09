'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import MediaCard from '@/components/search/client/MediaCard';
import MediaCardSkeleton from '@/components/search/client/MediaCardSkeleton';
import { getTrendingAllDay } from '@/lib/api/tmdb/home';
import { removeDuplicateMedia } from '@/lib/utils/media';
import type { Media } from '@/types/tmdb';

const TopSearches = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useInfiniteQuery({
    queryKey: ['topSearches'],
    queryFn: ({ pageParam = 1 }) => getTrendingAllDay(pageParam),
    getNextPageParam: (lastPage) => {
      if ('total_pages' in lastPage && 'page' in lastPage) {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  // Intersection Observer로 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div>
        <h2 className="py-[21px] text-headline2 text-white">Top Searches</h2>
        <div className="space-y-[2px]">
          {[...Array(8)].map((_, i) => (
            <MediaCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const allResults = data.pages.flatMap((page) => page.results) || [];

  // 중복 제거
  const uniqueResults = removeDuplicateMedia(allResults as Media[]);

  if (uniqueResults.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="py-[21px] text-headline2 text-white">Top Searches</h2>
      <div className="space-y-[2px]">
        {uniqueResults.map((item) => (
          <MediaCard key={`${item.id}-${item.media_type || 'unknown'}`} item={item as Media} />
        ))}
      </div>

      {/* 무한 스크롤 트리거 */}
      <div ref={observerRef} className="h-20 flex items-center justify-center">
        {isFetchingNextPage && <p className="text-white text-sm">Loading more...</p>}
      </div>
    </div>
  );
};

export default TopSearches;
