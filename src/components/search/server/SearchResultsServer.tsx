import { searchMulti } from '@/lib/api/tmdb/search';

import SearchResults from '../client/SearchResults';

interface SearchResultsServerProps {
  query: string;
}

const SearchResultsServer = async ({ query }: SearchResultsServerProps) => {
  const initialData = await searchMulti(query, 1);

  return <SearchResults query={query} initialData={initialData} />;
};

export default SearchResultsServer;
