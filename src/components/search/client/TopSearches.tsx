'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { getTrendingAllDay } from '@/lib/api/tmdb/home';
import { getImageUrl } from '@/constants/imageURL';
import type { Media } from '@/types/tmdb';
import PlayButton from '@/svgs/search/playButton.svg';

const TopSearches = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topSearches'],
    queryFn: getTrendingAllDay,
  });

  if (isLoading) {
    return (
      <div className="px-5 pb-4">
        <h2 className="text-headline2">Top Searches</h2>
        <div className="space-y-[19px]">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-gray-300 h-[76px] rounded-[2px] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data?.results) {
    return null;
  }

  const items = data.results.slice(0, 7) as Media[];

  const getTitle = (item: Media) => {
    if ('title' in item) return item.title;
    if ('name' in item) return item.name;
    return 'Unknown';
  };

  return (
    <div>
      <h2 className="py-[21px] text-headline2 text-white">Top Searches</h2>
      <div className="space-y-[2px]">
        {items.map((item) => (
          <div key={item.id} className="h-[76px] flex items-center relative overflow-hidden bg-gray-300">
            {/* 이미지 */}
            <div className="w-[146px] h-[76px] relative shrink-0">
              <Image
                src={getImageUrl(item.poster_path, 'SMALL') || '/placeholder.png'}
                alt={getTitle(item)}
                fill
                sizes="146px"
                className="object-cover"
              />
            </div>

            {/* 제목 및 재생 버튼 */}
            <div className="flex-1 flex items-center justify-between px-[19px]">
              <h3 className="text-body2 text-white flex-1">{getTitle(item)}</h3>
              <PlayButton className="w-7 h-7" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSearches;
