import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface UseInfiniteScrollParams<T> {
  queryKey: string[];
  queryFn: (params: { pageParam: number }) => Promise<T>;
  getNextPageParam: (lastPage: T) => number | undefined;
  initialData?: {
    pages: T[];
    pageParams: number[];
  };
  enabled?: boolean;
}

export const useInfiniteScroll = <T>({
  queryKey,
  queryFn,
  getNextPageParam,
  initialData,
  enabled = true,
}: UseInfiniteScrollParams<T>) => {
  const observerRef = useRef<HTMLDivElement>(null);

  const queryResult = useInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam,
    initialPageParam: 1,
    initialData,
    enabled,
  });

  const { fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult;

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

  return {
    ...queryResult,
    observerRef,
  };
};
