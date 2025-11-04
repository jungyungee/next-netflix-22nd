/**
 * 상세 정보 페이지 전용 TMDB API 함수
 * 특정 미디어의 상세 정보를 조회하는 API를 제공합니다.
 */

import { axiosInstance } from '@/lib/api/axiosInstance';

/**
 * 특정 미디어의 상세 정보 조회
 * @param media_type - 미디어 타입 ("movie" 또는 "tv")
 * @param id - 미디어 ID
 * @returns 미디어 상세 정보
 */
export const getDetail = async (media_type: string, id: string) => {
  try {
    const res = await axiosInstance.get(`/${media_type}/${id}`, { params: { language: 'ko-KR' } });
    return res.data;
  } catch (err) {
    console.error('getDetail data error', err);
    return null;
  }
};
