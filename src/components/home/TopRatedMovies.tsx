/**
 * TopRatedMovies 섹션 컴포넌트
 * 높은 평점의 영화를 표시합니다.
 */

import MovieSwiper from '@/components/home/MovieSwiper';
import { getTopRatedMovies } from '@/lib/api';

const TopRatedMovies = async () => {
  const response = await getTopRatedMovies();
  const movies = response.results;

  return <MovieSwiper title="Top Rated Movies" items={movies} itemWidth="103px" itemHeight="161px" />;
};

export default TopRatedMovies;
