'use client';

/**
 * Preview 섹션 컴포넌트
 * 인기 영화를 원형 이미지로 미리보기 형태로 표시합니다.
 */

import { useEffect, useState } from 'react';

import MovieSwiper from '@/components/home/MovieSwiper';
import { getMoviePopular } from '@/lib/api';
import { Movie } from '@/types/tmdb';

const Preview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMoviePopular();
      setMovies(response.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return null;

  return <MovieSwiper title="Previews" items={movies} itemWidth="102px" itemHeight="102px" shape="circle" />;
};

export default Preview;
