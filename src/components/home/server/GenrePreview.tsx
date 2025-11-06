/**
 * GenrePreview 섹션 컴포넌트
 * 특정 장르의 영화를 표시합니다.
 */

import MovieSwiper from '@/components/home/client/MovieSwiper';
import { getMoviesByGenre } from '@/lib/api';

const GenrePreview = async () => {
  // 액션(28), 모험(12) 장르 조합
  const response = await getMoviesByGenre('28,12');
  const movies = response.results;

  return <MovieSwiper title="Action & Adventure Movies" items={movies} itemWidth="103px" itemHeight="177px" />;
};

export default GenrePreview;
