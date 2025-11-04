'use client';

/**
 * NetflixOriginal 섹션 컴포넌트
 * 넷플릭스 오리지널 TV 프로그램을 표시합니다.
 */

import { useEffect, useState } from 'react';

import MovieSwiper from '@/components/home/MovieSwiper';
import { getTVByNetwork } from '@/lib/api';
import { TV } from '@/types/tmdb';

const NetflixOriginal = () => {
  const [tvShows, setTvShows] = useState<TV[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTVShows = async () => {
      // Netflix 네트워크 ID: 213
      const response = await getTVByNetwork(213);
      setTvShows(response.results);
      setLoading(false);
    };

    fetchTVShows();
  }, []);

  if (loading) return null;

  return <MovieSwiper title="Netflix Originals" items={tvShows} itemWidth="154px" itemHeight="251px" />;
};

export default NetflixOriginal;
