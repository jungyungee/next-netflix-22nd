/**
 * Detail 페이지 로딩 컴포넌트
 * 페이지 로딩 중 표시되는 스켈레톤 UI
 */

const DetailLoading = () => {
  return (
    <div className="bg-black text-white">
      {/* 포스터 스켈레톤 */}
      <div className="relative w-full h-[400px] bg-gray-800 animate-pulse" />

      {/* 재생 버튼 스켈레톤 */}
      <div className="flex justify-center items-center mb-8 mt-4">
        <div className="bg-gray-700 mx-6 h-[45px] w-[303px] rounded-[5.63px] animate-pulse" />
      </div>

      {/* 상세 정보 스켈레톤 */}
      <div className="relative px-8 pb-4">
        <div className="h-8 w-32 bg-gray-700 rounded mb-4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default DetailLoading;
