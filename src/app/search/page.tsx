import { Suspense } from 'react';

import SearchInput from '@/components/search/client/SearchInput';
import SearchResultsServer from '@/components/search/server/SearchResultsServer';
import TopSearchesServer from '@/components/search/server/TopSearchesServer';
import SearchResultsSkeleton from '@/components/search/skeletons/SearchResultsSkeleton';
import TopSearchesSkeleton from '@/components/search/skeletons/TopSearchesSkeleton';

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const searchQuery = params.q || '';

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-col">
        {/* 검색 입력창 및 헤더 */}
        <div className="sticky top-0 z-40 bg-black">
          <div className="h-11 bg-black" />
          <SearchInput />
        </div>

        {/* 검색 결과 or Top Searches */}
        {searchQuery ? (
          <Suspense key={searchQuery} fallback={<SearchResultsSkeleton />}>
            <SearchResultsServer query={searchQuery} />
          </Suspense>
        ) : (
          <Suspense fallback={<TopSearchesSkeleton />}>
            <TopSearchesServer />
          </Suspense>
        )}
      </div>
    </main>
  );
};

export default SearchPage;
