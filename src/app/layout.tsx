import '@/styles/globals.css';

import type { Metadata } from 'next';

import BottomNav from '@/components/navigation/BottomNav';

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'CEOS 22기 모델리 팀 Netflix 클론코딩 프로젝트',
  icons: { icon: '/favicon.svg' },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" as="font" href="/fonts/SFProDisplay.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex justify-center items-center min-h-screen bg-black">
        <div className="relative bg-black w-[375px] h-screen flex flex-col shadow-2xl">
          <div className="flex-1 overflow-y-auto scrollbar-hide">{children}</div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
