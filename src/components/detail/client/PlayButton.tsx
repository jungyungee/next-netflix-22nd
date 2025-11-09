/**
 * PlayButton 컴포넌트 (Client Component)
 * 재생 버튼을 표시합니다.
 */

'use client';

import PlayIcon from '@/svgs/navigation/playIcon.svg';

const PlayButton = () => {
  return (
    <div className="flex justify-center items-center mb-8">
      <button className="bg-gray-100 text-black mx-6 px-8 h-[45px] w-[303px] rounded-[5.63px] inline-flex items-center justify-center gap-2 text-subhead1 leading-none cursor-pointer">
        <PlayIcon className="w-[18px] h-[21.6px] shrink-0" />
        <span className="text-subhead1 leading-none align-middle">Play</span>
      </button>
    </div>
  );
};

export default PlayButton;
