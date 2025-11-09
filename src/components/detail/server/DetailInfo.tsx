/**
 * DetailInfo 컴포넌트
 * 상세 페이지의 정보(제목, 줄거리)를 표시합니다.
 */

interface DetailInfoProps {
  overview: string;
}

const DetailInfo = ({ overview }: DetailInfoProps) => {
  const overviewText = (overview || '').trim();

  return (
    <div className="relative px-8 pb-4">
      <h1 className="text-headline2 font-bold mb-4">Previews</h1>
      {overviewText ? (
        <p className="text-caption3">{overviewText}</p>
      ) : (
        <p className="text-caption3">줄거리가 따로 제공되지 않습니다.</p>
      )}
    </div>
  );
};

export default DetailInfo;
