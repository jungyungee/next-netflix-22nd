/**
 * TrendingMovie 컴포넌트 (Server Component)
 * 데이터를 서버에서 fetch하여 Client Component로 전달합니다.
 */

import TrendingMovieClient from '@/components/home/TrendingMovieClient';
import { getTrendingAllDay } from '@/lib/api';

const TrendingMovie = async () => {
  const response = await getTrendingAllDay();
  const items = response.results.slice(0, 10); // 상위 10개 아이템만 사용

  return <TrendingMovieClient items={items} />;
};

export default TrendingMovie;
