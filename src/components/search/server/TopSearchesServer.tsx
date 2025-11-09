import { getTrendingAllDay } from '@/lib/api/tmdb/home';

import TopSearches from '../client/TopSearches';

const TopSearchesServer = async () => {
  const initialData = await getTrendingAllDay(1);

  return <TopSearches initialData={initialData} />;
};

export default TopSearchesServer;
