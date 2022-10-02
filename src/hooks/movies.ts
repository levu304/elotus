import { useMemo } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { FetcherError, MovieDetail, MovieListItem } from "../types";

export const useNowPlaying = (
  page: number = 1
): {
  isLoading: boolean;
  items: MovieListItem[];
  error: FetcherError;
} => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_TMDB_API_ENDPOINT}/movie/now_playing?api_key=${
      import.meta.env.VITE_TMBD_API_KEY
    }&language=en-US&page=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const isLoading: boolean = useMemo(() => !data && !error, [data, error]);

  const items: MovieListItem[] = useMemo(() => {
    if (isLoading || error) return [];

    return data.results;
  }, [isLoading, error]);

  return {
    isLoading,
    items,
    error,
  };
};

export const useTopRated = (
  page: number = 1
): {
  isLoading: boolean;
  items: MovieListItem[];
  error: FetcherError;
} => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_TMDB_API_ENDPOINT}/movie/top_rated?api_key=${
      import.meta.env.VITE_TMBD_API_KEY
    }&language=en-US&page=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const isLoading: boolean = useMemo(() => !data && !error, [data, error]);

  const items: MovieListItem[] = useMemo(() => {
    if (isLoading || error) return [];

    return data.results;
  }, [isLoading, error]);

  return {
    isLoading,
    items,
    error,
  };
};

export const useMovieDetail = (
  id: string | undefined
): {
  isLoading: boolean;
  item: MovieDetail;
  error: FetcherError;
} => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_TMDB_API_ENDPOINT}/movie/${id}?api_key=${
      import.meta.env.VITE_TMBD_API_KEY
    }&language=en-US`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const isLoading: boolean = useMemo(() => !data && !error, [data, error]);

  return {
    isLoading,
    item: data,
    error,
  };
};
