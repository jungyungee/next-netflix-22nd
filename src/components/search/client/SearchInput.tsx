'use client';

import { useEffect, useState } from 'react';

import SearchIcon from '@/svgs/common/searchIcon.svg';
import XIcon from '@/svgs/common/xIcon.svg';

interface SearchInputProps {
  onSearchChange: (query: string) => void;
}

const SearchInput = ({ onSearchChange }: SearchInputProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearchChange]);

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
