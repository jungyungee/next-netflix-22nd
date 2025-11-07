'use client';

interface SearchResultsProps {
  query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
  return <div>SearchResults: {query}</div>;
};

export default SearchResults;
