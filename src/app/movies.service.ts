import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PopularMovies {
  results: Array<PopularMoviesResult>
}

export interface PopularMoviesResult {
  title: string
  poster_path: string
  release_date: string
  overview: string
  genre_ids: number
  id: number
}

export interface SearchMovies {
  results: Array<SearchMoviesResult>
}

export interface SearchMoviesResult {
  title: string
  poster_path: string
  release_date: string
  overview: string
  genre_ids: number
  id: number
}

export interface Movies {
  
  title: string
  poster_path: string
  release_date: string
  overview: string
  runtime: number
  genres: Array<MoviesGenres>
}

export interface MoviesGenres {
  name: string
}



@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor( private http: HttpClient ) {}

}

/* genres list
https://api.themoviedb.org/3/genre/movie/list?api_key=38193385b589296926c46f16b67e1b93&language=en-US
*/
