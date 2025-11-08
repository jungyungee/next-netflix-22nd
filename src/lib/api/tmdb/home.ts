/**
 * 홈 페이지 전용 TMDB API 함수
 * 홈 페이지의 각 섹션에서 사용하는 영화 및 TV 데이터를 가져옵니다.
 */

import { tmdbGet } from '@/lib/api/tmdbClient';

/**
 * 오늘의 트렌딩 콘텐츠 (영화 + TV 프로그램)
 * 당일 가장 인기있는 모든 미디어를 가져옵니다.
 * @param page - 페이지 번호 (기본값: 1)
 * @returns TMDB 트렌딩 데이터 (영화 및 TV 포함)
 */
export const getTrendingAllDay = async (page: number = 1) => {
  try {
    return await tmdbGet('/trending/all/day', { language: 'ko-KR', page });
  } catch (err) {
    console.error('getTrendingAllDay data error', err);
    return { results: [] } as const;
  }
};

/**
 * 특정 장르의 영화 목록 조회
 * @param genreIds - 장르 ID (콤마로 구분된 문자열, 예: "28,12")
 * @returns 해당 장르의 인기순 영화 목록
 */
export const getMoviesByGenre = async (genreIds: string) => {
  try {
    return await tmdbGet('/discover/movie', {
      with_genres: genreIds,
      sort_by: 'popularity.desc',
      language: 'ko-KR',
    });
  } catch (err) {
    console.error('getMoviesByGenre data error', err);
    return { results: [] } as const;
  }
};

/**
 * 특정 TV 네트워크의 프로그램 목록 조회
 * @param networkId - TV 네트워크 ID (예: Netflix = 213)
 * @returns 해당 네트워크의 TV 프로그램 목록
 */
export const getTVByNetwork = async (networkId: number) => {
  try {
    return await tmdbGet('/discover/tv', { with_networks: networkId, language: 'ko-KR' });
  } catch (err) {
    console.error('getTVByNetwork data error', err);
    return { results: [] } as const;
  }
};

/**
 * 특정 제작사의 영화 목록 조회
 * @param companyId - 제작사 ID
 * @returns 해당 제작사의 영화 목록
 */
export const getMoviesByCompany = async (companyId: number) => {
  try {
    return await tmdbGet('/discover/movie', { with_companies: companyId, language: 'ko-KR' });
  } catch (err) {
    console.error('getMoviesByCompany data error', err);
    return { results: [] } as const;
  }
};

/**
 * 인기 영화 목록 조회 (Preview 섹션용)
 * @param page - 페이지 번호 (기본값: 1)
 * @returns 현재 인기있는 영화 목록
 */
export const getMoviePopular = async (page: number = 1) => {
  try {
    return await tmdbGet('/movie/popular', { language: 'ko-KR', page });
  } catch (err) {
    console.error('getMoviePopular data error', err);
    return { results: [] } as const;
  }
};

/**
 * 한국 영화 목록 조회
 * 원본 언어가 한국어인 영화만 필터링합니다.
 * @returns 한국 영화 목록
 */
export const getKoreaMovie = async () => {
  try {
    return await tmdbGet('/discover/movie', { with_original_language: 'ko', language: 'ko-KR' });
  } catch (err) {
    console.error('getKoreaMovie data error', err);
    return { results: [] } as const;
  }
};

/**
 * 평점이 높은 영화 목록 조회 (Top Rated 섹션용)
 * @returns 높은 평점의 영화 목록
 */
export const getTopRatedMovies = async () => {
  try {
    return await tmdbGet('/movie/top_rated', { language: 'ko-KR' });
  } catch (err) {
    console.error('getTopRatedMovies data error', err);
    return { results: [] } as const;
  }
};
