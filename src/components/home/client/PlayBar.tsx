'use client';

import Link from 'next/link';

import AddIcon from '@/svgs/navigation/addIcon.svg';
import InfoIcon from '@/svgs/navigation/infoIcon.svg';
import PlayIcon from '@/svgs/navigation/playIcon.svg';

interface PlayBarProps {
  mediaId: number; // 항상 존재
  mediaType?: 'movie' | 'tv'; // 기본 movie
}

const PlayBar = ({ mediaId, mediaType = 'movie' }: PlayBarProps) => {
  return (
    <div className="flex items-center justify-center gap-[42px]">
      <div className="flex flex-col items-center cursor-pointer">
        <AddIcon className="w-6 h-6" />
        <span className="text-body3 mt-0.5">My List</span>
      </div>
      <button className="bg-gray-100 text-black px-6 py-2 rounded-[5.63px] flex items-center gap-2 text-subhead1 cursor-pointer">
        <PlayIcon className="w-[18px] h-[21.6px]" />
        Play
      </button>
      <Link
        href={`/detail/${mediaType}/${mediaId}`}
        aria-label="More Info"
        className="flex flex-col items-center cursor-pointer"
      >
        <InfoIcon className="w-6 h-6" />
        <span className="text-body3 mt-0.5">Info</span>
      </Link>
    </div>
  );
};

export default PlayBar;
