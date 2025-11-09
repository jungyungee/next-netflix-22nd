'use client';

import MediaCard from '@/components/search/client/MediaCard';
import MediaCardSkeleton from '@/components/search/skeletons/MediaCardSkeleton';
import { useInfiniteScroll } from '@/hooks/search/useInfiniteScroll';
import { searchMulti } from '@/lib/api/tmdb/search';
import { removeDuplicateMedia } from '@/lib/utils/media';
import type { Media, TMDBListResponse } from '@/types/tmdb';

interface SearchResultsProps {
  query: string;
  initialData?: TMDBListResponse<Media>;
}

const SearchResults = ({ query, initialData }: SearchResultsProps) => {
  const { data, observerRef, isFetchingNextPage, isLoading, error } = useInfiniteScroll({
    queryKey: ['searchResults', query],
    queryFn: ({ pageParam = 1 }) => searchMulti(query, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [1],
        }
      : undefined,
    enabled: !!query,
  });

  if (isLoading) {
    return (
      <div>
        <h2 className="py-[21px] text-headline2 text-white">Search Results</h2>
        <div className="space-y-[2px]">
          {[...Array(8)].map((_, i) => (
            <MediaCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-5 py-10 text-center">
        <p className="text-white">An error occurred while searching</p>
      </div>
    );
  }

  // 배우(person) 제외, 영화와 TV만 포함
  const allResults = data?.pages.flatMap((page) => page.results.filter((item) => item.media_type !== 'person')) || [];

  // 중복 제거
  const uniqueResults = removeDuplicateMedia(allResults);

  if (uniqueResults.length === 0) {
    return (
      <div className="px-5 py-10 text-center">
        <p className="text-white">No results found</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="py-[21px] text-headline2 text-white">Search Results</h2>
      <div className="space-y-[2px]">
        {uniqueResults.map((item) => (
          <MediaCard key={`${item.id}-${item.media_type}`} item={item as Media} />
        ))}
      </div>

      {/* 무한 스크롤 트리거 */}
      <div ref={observerRef} className="h-20 flex items-center justify-center">
        {isFetchingNextPage && <p className="text-white text-sm">Loading more...</p>}
      </div>
    </div>
  );
};

export default SearchResults;
