'use client';

/**
 * GenrePreview 섹션 컴포넌트
 * 특정 장르의 영화를 표시합니다.
 */

import { useEffect, useState } from 'react';

import { getMoviesByGenre } from '@/apis/home';
import MovieSwiper from '@/components/home/MovieSwiper';
import { Movie } from '@/types/tmdb';

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      // 액션(28), 모험(12) 장르 조합
      const response = await getMoviesByGenre('28,12');
      setMovies(response.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return null;
  }

  return <MovieSwiper title="Action & Adventure Movies" items={movies} itemWidth="103px" itemHeight="177px" />;
};

export default GenrePreview;
