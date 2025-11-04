'use client';

/**
 * KoreaMovie 섹션 컴포넌트
 * 한국 영화를 표시합니다.
 */

import { useEffect, useState } from 'react';

import MovieSwiper from '@/components/home/MovieSwiper';
import { getKoreaMovie } from '@/lib/api';
import { Movie } from '@/types/tmdb';

const KoreaMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getKoreaMovie();
      setMovies(response.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return null;

  return <MovieSwiper title="Korea Movies" items={movies} itemWidth="103px" itemHeight="161px" />;
};

export default KoreaMovie;
