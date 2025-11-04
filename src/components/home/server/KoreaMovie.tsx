/**
 * KoreaMovie 섹션 컴포넌트
 * 한국 영화를 표시합니다.
 */

import MovieSwiper from '@/components/home/client/MovieSwiper';
import { getKoreaMovie } from '@/lib/api';

const KoreaMovie = async () => {
  const response = await getKoreaMovie();
  const movies = response.results;

  return <MovieSwiper title="Korea Movies" items={movies} itemWidth="103px" itemHeight="161px" />;
};

export default KoreaMovie;
