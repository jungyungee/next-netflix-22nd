import Image from 'next/image';
import Link from 'next/link';

import { getImageUrl } from '@/constants/imageURL';
import { getMediaTitle, getMediaType } from '@/lib/utils/media';
import PlayButton from '@/svgs/search/playButton.svg';
import type { Media } from '@/types/tmdb';

interface MediaCardProps {
  item: Media;
}

const MediaCard = ({ item }: MediaCardProps) => {
  return (
    <Link href={`/detail/${getMediaType(item)}/${item.id}`} className="block">
      <div className="h-[76px] flex items-center relative overflow-hidden bg-gray-300">
        {/* 이미지 */}
        <div className="w-[146px] h-[76px] relative shrink-0">
          <Image
            src={getImageUrl(item.poster_path, 'SMALL') || '/placeholder.png'}
            alt={getMediaTitle(item)}
            fill
            sizes="146px"
            className="object-cover"
          />
        </div>

        {/* 제목 및 재생 버튼 */}
        <div className="flex-1 flex items-center justify-between px-[19px]">
          <h3 className="text-body2 text-white flex-1">{getMediaTitle(item)}</h3>
          <PlayButton className="w-7 h-7" />
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
