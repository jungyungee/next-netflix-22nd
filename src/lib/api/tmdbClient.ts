/**
 * TMDB API 통신을 위한 fetch 헬퍼 (axios 의존성 없이 표준 fetch로 TMDB API 호출을 간소화)
 * 모든 TMDB API 요청에 공통으로 사용됩니다.
 */

const BASE_URL = process.env.NEXT_PUBLIC_URL!;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

type QueryParams = Record<string, string | number | boolean | undefined>;

/**
 * TMDB API GET 요청 헬퍼
 * @param path - API 경로 (예: '/trending/all/day')
 * @param params - 쿼리 파라미터 객체
 * @returns JSON 응답 데이터
 */
export async function tmdbGet(path: string, params: QueryParams = {}) {
  // path가 /로 시작하면 제거 (BASE_URL 끝에 /3이 유지되도록)
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const url = new URL(`${BASE_URL}/${cleanPath}`); // TMDB API 베이스 URL

  // 기본 파라미터 설정
  url.searchParams.set('api_key', API_KEY); // TMDB API 키 (모든 요청에 자동 포함)
  if (!url.searchParams.has('language') && !params.language) {
    url.searchParams.set('language', 'ko-KR');
  }

  // 추가 파라미터 설정
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  const res = await fetch(url.toString(), { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
