'use client';

import { useState } from 'react';

import SearchInput from '@/components/search/client/SearchInput';
import SearchResults from '@/components/search/client/SearchResults';
import TopSearches from '@/components/search/client/TopSearches';

const SearchContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col">
      {/* 검색 입력창 */}
      <div className="sticky top-0 z-40">
        <SearchInput onSearchChange={setSearchQuery} />
      </div>

      {/* 검색 결과 or Top Searches */}
      {searchQuery ? <SearchResults query={searchQuery} /> : <TopSearches />}
    </div>
  );
};

export default SearchContent;
