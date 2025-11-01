/**
 * TMDB API 통신을 위한 Axios 인스턴스
 * 모든 TMDB API 요청에 공통으로 사용됩니다.
 */

import axios from 'axios';

/**
 * TMDB API용 Axios 인스턴스
 * - baseURL: TMDB API 기본 URL (환경변수에서 가져옴)
 * - headers: 요청 헤더 설정
 * - params: 모든 요청에 자동으로 포함될 파라미터 (API 키)
 */
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL, // TMDB API 베이스 URL
  headers: {
    'Content-Type': 'application/json', // JSON 형식으로 통신
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY, // TMDB API 키 (모든 요청에 자동 포함)
  },
});
