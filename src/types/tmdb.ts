/**
 * TMDB API 응답 타입 정의
 * The Movie Database (TMDB) API에서 반환하는 데이터 구조를 정의합니다.
 */

/**
 * 영화와 TV 프로그램의 공통 속성을 정의하는 기본 인터페이스
 */
interface BaseMedia {
  id: number; // 미디어 고유 ID
  poster_path: string | null; // 포스터 이미지 경로
  backdrop_path?: string | null; // 배경 이미지 경로
  overview?: string; // 줄거리 요약
  vote_average?: number; // 평균 평점 (0-10)
  popularity?: number; // 인기도 점수
  media_type?: 'movie' | 'tv' | 'person'; // 미디어 타입 (영화, TV, 인물)
}

/**
 * 영화 데이터 타입
 * BaseMedia를 확장하여 영화 특화 속성을 추가합니다.
 */
export interface Movie extends BaseMedia {
  title: string; // 영화 제목
  release_date?: string; // 개봉일 (YYYY-MM-DD)
  original_title?: string; // 원제
}

/**
 * TV 프로그램 데이터 타입
 * BaseMedia를 확장하여 TV 특화 속성을 추가합니다.
 */
export interface TV extends BaseMedia {
  name: string; // TV 프로그램 제목
  first_air_date?: string; // 첫 방영일 (YYYY-MM-DD)
  original_name?: string; // 원제
}

/**
 * 영화 또는 TV 프로그램을 나타내는 유니온 타입
 */
export type Media = Movie | TV;

/**
 * TMDB API 리스트 응답 구조
 * 페이지네이션이 포함된 API 응답 형식입니다.
 * @template T - 결과 배열의 아이템 타입 (Movie, TV 등)
 */
export interface TMDBListResponse<T> {
  page: number; // 현재 페이지 번호
  results: T[]; // 결과 데이터 배열
  total_pages: number; // 전체 페이지 수
  total_results: number; // 전체 결과 수
}
