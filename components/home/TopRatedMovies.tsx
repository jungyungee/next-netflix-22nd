'use client';

/**
 * TopRatedMovies 섹션 컴포넌트
 * 높은 평점의 영화를 표시합니다.
 */

import { useEffect, useState } from 'react';

import { getTopRatedMovies } from '@/apis/home';
import MovieSwiper from '@/components/home/MovieSwiper';
import { Movie } from '@/types/tmdb';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTopRatedMovies();
      setMovies(response.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return null;
  }

  return <MovieSwiper title="Top Rated Movies" items={movies} itemWidth="103px" itemHeight="161px" />;
};

export default TopRatedMovies;
