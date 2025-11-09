import MediaCardSkeleton from './MediaCardSkeleton';

const TopSearchesSkeleton = () => {
  return (
    <div>
      <h2 className="py-[21px] text-headline2 text-white">Top Searches</h2>
      <div className="space-y-[2px]">
        {[...Array(8)].map((_, i) => (
          <MediaCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopSearchesSkeleton;
