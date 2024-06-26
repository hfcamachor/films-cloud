export interface Films {
  Title: string;
  Year: string;
  imdbID: string;
}

export interface FilmsList {
  Poster: string;
  imdbRating: string;
  Title: string;
  Year: string;
}

export interface QueryResult {
  data: Films[] | undefined;
  isLoading: boolean;
}