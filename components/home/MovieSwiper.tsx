'use client';

/**
 * MovieSwiper 컴포넌트
 * Swiper 라이브러리를 사용하여 영화/TV 프로그램 목록을 가로 스크롤 형태로 표시합니다.
 */

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import Image from 'next/image';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getImageUrl } from '@/constants/imageURL';
import { Movie, TV } from '@/types/tmdb';

/**
 * MovieSwiper Props 인터페이스
 */
interface MovieSwiperProps {
  title: string; // 섹션 제목
  items: Movie[] | TV[]; // 영화 또는 TV 프로그램 배열
  itemWidth: string; // 각 아이템의 너비 (예: "103px")
  itemHeight: string; // 각 아이템의 높이 (예: "161px")
  shape?: 'rectangle' | 'circle'; // 아이템 모양 (기본값: rectangle)
}

/**
 * 영화/TV 프로그램 제목 추출 헬퍼 함수
 */
const getTitle = (item: Movie | TV): string => {
  return 'title' in item ? item.title : item.name;
};

const MovieSwiper = ({ title, items, itemWidth, itemHeight, shape = 'rectangle' }: MovieSwiperProps) => {
  return (
    <div className="w-full">
      {/* 섹션 제목 */}
      <h2 className="mb-[14px] px-4 text-headline3 text-white">{title}</h2>

      {/* Swiper 컨테이너 */}
      <Swiper
        modules={[FreeMode, Navigation]}
        spaceBetween={7}
        slidesPerView="auto"
        freeMode={true}
        navigation={false}
        className="movie-swiper"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              width: itemWidth,
              height: itemHeight,
            }}
            className="w-auto!"
          >
            <div
              className="relative overflow-hidden bg-gray-800"
              style={{
                width: itemWidth,
                height: itemHeight,
                borderRadius: shape === 'circle' ? '50%' : '8px',
              }}
            >
              {item.poster_path ? (
                <Image
                  src={getImageUrl(item.poster_path, 'LARGE')}
                  alt={getTitle(item)}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                // poster_path가 없을 경우 플레이스홀더
                <div className="flex h-full w-full items-center justify-center bg-gray-700 text-gray-500">No Image</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSwiper;
