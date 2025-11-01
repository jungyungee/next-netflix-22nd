'use client';

/**
 * TrendingMovie 컴포넌트
 * 오늘의 트렌딩 콘텐츠를 10초마다 자동으로 변경하며 순위를 함께 표시합니다.
 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getTrendingAllDay } from '@/apis/home';
import { Movie } from '@/types/tmdb';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const TrendingMovie = () => {
  const [items, setItems] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await getTrendingAllDay();
        setItems(response.results);
      } catch (error) {
        console.error('Failed to fetch trending data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  // 5초마다 자동 전환
  useEffect(() => {
    if (!items.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  if (loading || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* 포스터 영역 */}
      <div className="relative w-full overflow-hidden bg-black aspect-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {currentItem.poster_path ? (
              <Image
                src={`${IMAGE_BASE_URL}${currentItem.poster_path}`}
                alt={currentItem.title || 'Untitled'}
                fill
                sizes="100%"
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 순위 표시 */}
      <div className="mt-4 h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white tracking-wide"
          >
            #{currentIndex + 1}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrendingMovie;
