const MediaCardSkeleton = () => {
  return (
    <div className="h-[76px] flex items-center relative overflow-hidden bg-gray-300">
      {/* 이미지 영역 */}
      <div className="w-[146px] h-[76px] bg-gray-200 animate-pulse shrink-0" />

      {/* 텍스트 영역 */}
      <div className="flex-1 flex items-center justify-between px-[19px]">
        <div className="flex-1 pr-4">
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default MediaCardSkeleton;
