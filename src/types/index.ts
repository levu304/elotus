export type MovieListItem = {
  id: string;
  original_title: string;
  poster_path: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  original_language: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type GenreType = {
  id: string;
  name: string;
};

type ProductionCompanyType = {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
  runtime: number;
  revenue: number;
};

export interface MovieDetail extends MovieListItem {
  budget: number;
  genres: GenreType[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompanyType[];
}

export class FetcherError extends Error {
  status: number | undefined;
  info: any | undefined;
}

export type MovieListComponentProps = {
  items: MovieListItem[];
  listType: boolean;
  handleRefresh: () => Promise<any>;
};

export type MovieListItemComponentProps = {
  item: MovieListItem;
  listType: boolean;
};
