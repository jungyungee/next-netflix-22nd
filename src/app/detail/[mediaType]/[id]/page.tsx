import Image from 'next/image';

import { getImageUrl } from '@/constants/imageURL';
import { getDetail } from '@/lib/api/tmdb/detail';
import PlayIcon from '@/svgs/navigation/playIcon.svg';

const DetailPage = async ({ params }: { params: Promise<{ mediaType: string; id: string }> }) => {
  const { mediaType, id } = await params;
  const detail = await getDetail(mediaType, id);

  if (!detail) {
    return (
      <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
        <p>정보를 불러올 수 없습니다.</p>
      </div>
    );
  }

  const title = 'title' in detail ? detail.title : detail.name;
  const overviewText = (detail.overview || '').trim();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 포스터 이미지 */}
      {detail.poster_path && (
        <div className="relative w-full h-[415px]">
          <Image src={getImageUrl(detail.poster_path, 'ORIGINAL')} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
        </div>
      )}
      {/* 재생 버튼 */}
      <div className="flex justify-center items-center mb-8">
        <button className="bg-gray-100 text-black mx-6 px-8 h-[45px] w-[303px] rounded-[5.63px] inline-flex items-center justify-center gap-2 text-subhead1 leading-none hover:bg-gray-200 transition cursor-pointer">
          <PlayIcon className="w-[18px] h-[21.6px] shrink-0" />
          <span className="text-subhead1 leading-none align-middle">Play</span>
        </button>
      </div>
      {/* 상세 정보 */}
      <div className="relative px-8 pb-4">
        <h1 className="text-headline2 font-bold mb-4">Previews</h1>
        {overviewText ? (
          <p className="text-caption3">{overviewText}</p>
        ) : (
          <p className="text-caption3">줄거리가 따로 제공되지 않습니다.</p>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
