import PlayButton from '@/components/detail/client/PlayButton';
import DetailInfo from '@/components/detail/server/DetailInfo';
import DetailPoster from '@/components/detail/server/DetailPoster';
import { getDetail } from '@/lib/api/tmdb/detail';

// 페이지 레벨 캐싱 설정
export const revalidate = 3600; // 1시간
export const dynamic = 'force-static'; // 정적 생성 강제

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

  return (
    <div className="bg-black text-white">
      {/* 포스터 이미지 */}
      {detail.poster_path && <DetailPoster posterPath={detail.poster_path} title={title} />}
      {/* 재생 버튼 */}
      <PlayButton />
      {/* 상세 정보 */}
      <DetailInfo overview={detail.overview} />
    </div>
  );
};

export default DetailPage;
