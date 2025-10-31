import './globals.css';

import type { Metadata } from 'next';

import BottomNav from './components/navigation/BottomNav';

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'CEOS 22기 모델리 팀 Netflix 클론코딩 프로젝트',
  icons: {
    icon: '/favicon.svg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className="flex justify-center items-center min-h-screen bg-black">
        <div className="relative bg-black w-[375px] min-h-screen overflow-hidden shadow-2xl">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
