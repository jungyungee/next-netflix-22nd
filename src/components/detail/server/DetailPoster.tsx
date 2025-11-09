/**
 * DetailPoster 컴포넌트
 * 상세 페이지의 포스터 이미지를 표시합니다.
 */

import Image from 'next/image';

import { getImageUrl } from '@/constants/imageURL';

interface DetailPosterProps {
  posterPath: string;
  title: string;
}

const DetailPoster = ({ posterPath, title }: DetailPosterProps) => {
  return (
    <div className="relative w-full h-[415px]">
      <Image
        src={getImageUrl(posterPath, 'LARGE')}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
    </div>
  );
};

export default DetailPoster;
