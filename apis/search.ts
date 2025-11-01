/**
 * 검색 페이지 전용 TMDB API 함수
 * 검색 기능에 사용되는 API를 제공합니다.
 */

import { axiosInstance } from '@/apis/axiosInstance';

/**
 * 통합 검색 (영화 + TV 프로그램 + 인물)
 * @param query - 검색어
 * @param page - 페이지 번호 (기본값: 1)
 * @returns 검색 결과 (영화, TV, 인물 포함)
 */
export const searchMulti = async (query: string, page: number = 1) => {
  try {
    const res = await axiosInstance.get('/search/multi', {
      params: { query, language: 'ko-KR', page, include_adult: 'false' },
    });
    return res.data;
  } catch (err) {
    console.error('searchMulti data error', err);
    return { results: [] };
  }
};
