import type { Media } from '@/types/tmdb';

/**
 * Media 객체에서 제목을 추출하는 유틸리티 함수
 * @param item - Movie 또는 TV 객체
 * @returns 제목 문자열
 */
export const getMediaTitle = (item: Media): string => {
  if ('title' in item) return item.title;
  if ('name' in item) return item.name;
  return 'Unknown';
};
