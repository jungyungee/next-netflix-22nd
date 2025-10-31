import { NetflixIcon } from '@/app/assets/svgs/navigation';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 py-4">
        {/* 왼쪽: Netflix 아이콘 */}
        <div className="flex items-center">
          <NetflixIcon />
        </div>

        {/* 오른쪽: 메뉴 텍스트들 */}
        <div className="flex items-center space-x-8">
          <span className="text-subhead2 text-white cursor-pointer hover:text-gray-300 transition-colors">
            TV Shows
          </span>
          <span className="text-subhead2 text-white cursor-pointer hover:text-gray-300 transition-colors">Movies</span>
          <span className="text-subhead2 text-white cursor-pointer hover:text-gray-300 transition-colors">My List</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
