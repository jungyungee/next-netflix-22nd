'use client';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
    </div>
  );
};

export default Loading;