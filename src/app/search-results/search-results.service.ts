import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Movies {
  results: Array<MoviesResult>
  total_pages: number
  total_results: number
}

export interface MoviesResult {
  title: string
  name?: string
  vote_average?: number
  poster_path: string
  release_date: string
  overview: string
  genre_ids: number
  id: number
}

export interface SearchActors {
  results: Array<SearchActorsResult>
  total_pages: number
  total_results: number
}

export interface SearchActorsResult {
  id: number
  name: string
  profile_path: string
  known_for_department?: string
}


export interface SearchTvShows {
  page: number
  results: Array<SearchTvShowsResult>
  total_pages: number
  total_results: number
}

export interface SearchTvShowsResult {
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: number[]
  id: number
  name: string
  origin_country?: string[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path: string
  vote_average?: number
  vote_count?: number
}

export interface SearchKeywords {
  page: number
  results: Array<SearchKeywordsResult>
  total_pages: number
  total_results: number
}

export interface SearchKeywordsResult {
  name: string
  id: number
}

export interface SearchCollections {
  page: number
  results: Array<SearchCollectionsResult>
  total_pages: number
  total_results: number
}

export interface SearchCollectionsResult {
  adult?: boolean
  backdrop_path?: string
  id: number
  name: string
  original_language?: string
  original_name?: string
  overview?: string
  poster_path: string
}

export interface SearchCompanies {
  page: number
  results: Array<SearchCompaniesResult>
  total_pages: number
  total_results: number
}

export interface SearchCompaniesResult {
  id: number
  logo_path: any
  name: string
  origin_country?: string
}
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  searchName: string | undefined


  constructor(private http: HttpClient) { }

  getName(name: string | undefined){
   this.searchName = name
  }

  searchMovies(value: string | undefined, page: number | undefined): Observable<Movies>{
    return this.http.get<Movies>(`${environment.apiUrl}/search/movie${environment.apiKey}&language=en-US&query=${value}&page=${page}`)
  }

  searchActors(value: string | undefined, page: number | undefined): Observable<SearchActors>{
    return this.http.get<SearchActors>(`${environment.apiUrl}/search/person${environment.apiKey}&query=${value}&page=${page}`)

  }

  searchCompanies(value: string | undefined, page: number | undefined): Observable<SearchCompanies>{
    return this.http.get<SearchCompanies>(`${environment.apiUrl}/search/company${environment.apiKey}&query=${value}&page=${page}`)
  }

  searchCollections(value: string | undefined, number: number | undefined): Observable<SearchCollections>{
    return this.http.get<SearchCollections>(`${environment.apiUrl}/search/collection${environment.apiKey}&query=${value}&page=${number}`)
  }

  searchKeywords(value: string | undefined, page: number | undefined): Observable<SearchKeywords>{
    return this.http.get<SearchKeywords>(`${environment.apiUrl}/search/keyword${environment.apiKey}&query=${value}&page=${page}`)
  }

  searchTvShows(value: string | undefined, page: number | undefined): Observable<SearchTvShows>{
    return this.http.get<SearchTvShows>(`${environment.apiUrl}/search/tv${environment.apiKey}&query=${value}&page=${page}`)
  }
}
