
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PopularMovies {
  page: number
  total_pages: number
  results: Array<MoviesResult>
}

export interface MoviesResult {
  title : string
  poster_path: string
  release_date: string
}

/* . . . */
@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor( private http: HttpClient ) {}

  url = "https://api.themoviedb.org/3/movie/popular?api_key=38193385b589296926c46f16b67e1b93&language=en-US&page=1"
  urlSearchMovie = "https://api.themoviedb.org/3/search/movie?api_key=38193385b589296926c46f16b67e1b93&language=en-US&query="

  getPopularMovie() {
    return this.http.get<PopularMovies>(this.url);
  }

  getSearchMovie () {
    return this.http.get
  }
}
