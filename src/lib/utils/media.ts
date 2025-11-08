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

/**
 * Media 객체에서 미디어 타입을 추출하는 유틸리티 함수
 * @param item - Movie 또는 TV 객체
 * @returns 미디어 타입 ('movie' | 'tv')
 */
export const getMediaType = (item: Media): 'movie' | 'tv' => {
  return 'title' in item ? 'movie' : 'tv';
};

/**
 * Media 배열에서 중복을 제거하는 유틸리티 함수
 * @param items - Media 객체 배열
 * @returns 중복이 제거된 Media 객체 배열
 */
export const removeDuplicateMedia = (items: Media[]): Media[] => {
  return items.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id && t.media_type === item.media_type),
  );
};
