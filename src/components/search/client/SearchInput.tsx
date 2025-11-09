'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import SearchIcon from '@/svgs/common/searchIcon.svg';
import XIcon from '@/svgs/common/xIcon.svg';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        router.push(`/search?q=${encodeURIComponent(query)}`);
      } else {
        router.push('/search');
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, router]);

  return (
    <div className="h-[52px] w-full flex items-center justify-center px-5 bg-gray-300">
      <SearchIcon className="w-5 h-5 mr-[5px] text-white" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 p-3 bg-transparent text-white text-body1 outline-none placeholder:text-gray-100"
      />
      <XIcon className="w-[15px] h-[15px] ml-[5px] text-white cursor-pointer" onClick={() => setQuery('')} />
    </div>
  );
};

export default SearchInput;
