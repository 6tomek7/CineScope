import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PopularMovies {
  page: number
  total_pages: number
  results: Array<PopularMoviesResult>
}

export interface PopularMoviesResult {
  title: string
  poster_path: string
  release_date: string
}

export interface SearchMovies {
  results: Array<SearchMoviesResult>
}

export interface SearchMoviesResult {
  title: string
  poster_path: string
  release_date: string
}

@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor( private http: HttpClient ) {}

  urlSearchMovies = "https://api.themoviedb.org/3/search/movie?api_key=38193385b589296926c46f16b67e1b93&language=en-US&query="


  getSearchMovies (name: string) {
    return this.http.get<SearchMovies>(this.urlSearchMovies + name);
  }
}
