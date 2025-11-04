/**
 * Preview 섹션 컴포넌트
 * 인기 영화를 원형 이미지로 미리보기 형태로 표시합니다.
 */

import MovieSwiper from '@/components/home/client/MovieSwiper';
import { getMoviePopular } from '@/lib/api';

const Preview = async () => {
  const response = await getMoviePopular();
  const movies = response.results;

  return <MovieSwiper title="Previews" items={movies} itemWidth="102px" itemHeight="102px" shape="circle" />;
};

export default Preview;
