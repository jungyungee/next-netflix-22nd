import MediaCardSkeleton from './MediaCardSkeleton';

const SearchResultsSkeleton = () => {
  return (
    <div>
      <h2 className="py-[21px] text-headline2 text-white">Search Results</h2>
      <div className="space-y-[2px]">
        {[...Array(8)].map((_, i) => (
          <MediaCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsSkeleton;
