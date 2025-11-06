/**
 * TMDB 이미지 URL 상수
 * The Movie Database (TMDB)에서 제공하는 이미지를 가져오기 위한 기본 URL과 사이즈
 */

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

/**
 * TMDB 이미지 사이즈 옵션
 * - w92: 92px 너비 (썸네일)
 * - w154: 154px 너비 (작은 포스터)
 * - w185: 185px 너비
 * - w342: 342px 너비 (중간 포스터)
 * - w500: 500px 너비 (일반 포스터)
 * - w780: 780px 너비 (큰 포스터)
 * - original: 원본 사이즈
 */
export const IMAGE_SIZE = {
  SMALL: 'w154',
  MEDIUM: 'w342',
  LARGE: 'w500',
  XLARGE: 'w780',
  ORIGINAL: 'original',
} as const;

/**
 * 자주 사용하는 이미지 URL 생성 헬퍼
 */
export const getImageUrl = (path: string | null, size: keyof typeof IMAGE_SIZE = 'LARGE'): string => {
  if (!path) return '';
  return `${IMAGE_BASE_URL}${IMAGE_SIZE[size]}${path}`;
};
