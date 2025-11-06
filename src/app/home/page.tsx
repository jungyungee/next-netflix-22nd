/**
 * 홈 페이지
 * 넷플릭스 클론의 메인 페이지로, 다양한 영화 및 TV 프로그램 섹션을 표시합니다.
 */

import PlayBar from '@/components/home/client/PlayBar';
import GenrePreview from '@/components/home/server/GenrePreview';
import KoreaMovie from '@/components/home/server/KoreaMovie';
import NetflixOriginal from '@/components/home/server/NetflixOriginal';
import Preview from '@/components/home/server/Preview';
import TopRatedMovies from '@/components/home/server/TopRatedMovies';
import TrendingMovies from '@/components/home/server/TrendingMovie';
import Header from '@/components/navigation/Header';

const HomePage = () => {
  return (
    <main className="bg-black text-white">
      <Header />
      <TrendingMovies />
      <PlayBar />
      {/* 섹션 컨테이너 */}
      <div className="flex flex-col gap-[22px] pb-[72px] pt-11">
        <Preview />
        <GenrePreview />
        <NetflixOriginal />
        <KoreaMovie />
        <TopRatedMovies />
      </div>
    </main>
  );
};

export default HomePage;
