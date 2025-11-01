'use client';

import AddIcon from '@/svgs/navigation/addIcon.svg';
import InfoIcon from '@/svgs/navigation/infoIcon.svg';
import PlayIcon from '@/svgs/navigation/playIcon.svg';

const PlayBar = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-4">
      <div className="flex flex-col items-center cursor-pointer">
        <AddIcon className="w-6 h-6" />
        <span className="text-body3 text-white mt-1">My List</span>
      </div>
      <button className="bg-gray-100 text-black px-6 py-2 rounded-[5.63px] flex items-center gap-2 text-subhead1 hover:bg-gray-200 transition cursor-pointer">
        <PlayIcon className="w-[18px] h-[21.6px]" />
        Play
      </button>
      <div className="flex flex-col items-center cursor-pointer">
        <InfoIcon className="w-6 h-6" />
        <span className="text-body3 text-white mt-1">Info</span>
      </div>
    </div>
  );
};

export default PlayBar;
