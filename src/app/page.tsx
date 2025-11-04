'use client';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import netflixAnimation from '@/public/netflix-animation.json';

// 랜딩페이지
const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const REDIRECT_TIMER = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => clearTimeout(REDIRECT_TIMER);
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-64 h-64">
        <Lottie animationData={netflixAnimation} loop={false} autoplay={true} />
      </div>
    </main>
  );
};

export default LandingPage;
