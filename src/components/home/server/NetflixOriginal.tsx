/**
 * NetflixOriginal 섹션 컴포넌트
 * 넷플릭스 오리지널 TV 프로그램을 표시합니다.
 */

import MovieSwiper from '@/components/home/client/MovieSwiper';
import { getTVByNetwork } from '@/lib/api';

const NetflixOriginal = async () => {
  // Netflix 네트워크 ID: 213
  const response = await getTVByNetwork(213);
  const tvShows = response.results;

  return <MovieSwiper title="Netflix Originals" items={tvShows} itemWidth="154px" itemHeight="251px" />;
};

export default NetflixOriginal;
