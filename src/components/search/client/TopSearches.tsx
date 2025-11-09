'use client';

import MediaCard from '@/components/search/client/MediaCard';
import MediaCardSkeleton from '@/components/search/skeletons/MediaCardSkeleton';
import { useInfiniteScroll } from '@/hooks/search/useInfiniteScroll';
import { getTrendingAllDay } from '@/lib/api/tmdb/home';
import { removeDuplicateMedia } from '@/lib/utils/media';
import type { Media, TMDBListResponse } from '@/types/tmdb';

interface TopSearchesProps {
  initialData?: TMDBListResponse<Media>;
}

const TopSearches = ({ initialData }: TopSearchesProps) => {
  const { data, observerRef, isFetchingNextPage, isLoading, error } = useInfiniteScroll({
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
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [1],
        }
      : undefined,
  });

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
