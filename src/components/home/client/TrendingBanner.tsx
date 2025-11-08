'use client';

/**
 * TrendingBanner 컴포넌트 (Client Component)
 * 트렌딩 영화를 5초마다 자동으로 변경하며 순위를 함께 표시합니다.
 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import PlayBar from '@/components/home/client/PlayBar';
import { getImageUrl } from '@/constants/imageURL';
import { Movie } from '@/types/tmdb';

interface TrendingBannerProps {
  items: Movie[];
}

const TrendingBanner = ({ items }: TrendingBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 5초마다 자동 전환
  useEffect(() => {
    if (!items.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) {
    return (
      <section className="relative w-full flex flex-col items-center">
        <div className="relative w-full h-[415px] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        </div>
      </section>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* 포스터 영역 */}
      <div className="relative w-full h-[415px] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={getImageUrl(currentItem.poster_path, 'LARGE')}
              alt={currentItem.title || 'Untitled'}
              fill
              sizes="100%"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black via-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute flex gap-2 bottom-3 left-1/2 -translate-x-1/2 text-center">
          {/* TOP 10 */}
          <div className="flex items-center justify-center w-[15px] h-[15px] border border-white translate-y-[3px]">
            <span className="text-[4px] font-extrabold leading-none text-white text-center">
              TOP
              <br />
              <span className="text-[7px] font-extrabold">10</span>
            </span>
          </div>

          <span className="text-subhead3 text-white tracking-wide drop-shadow-md">
            #{currentIndex + 1} in Korea Today
          </span>
        </div>
      </div>
      {/* PlayBar 컴포넌트 이동 (상세페이지로 이동 가능) */}
      <div className="mt-4">
        <PlayBar mediaId={currentItem.id} mediaType={currentItem.media_type ?? 'movie'} />
      </div>
    </section>
  );
};

export default TrendingBanner;
