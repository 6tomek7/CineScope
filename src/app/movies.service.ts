import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface PopularMovies {
  results: Array<MoviesResult>
}

export interface MoviesResult {
  title: string
  poster_path: string
  release_date: string
  overview: string
  genre_ids: number
  id: number
}

export interface SearchMovies {
  results: Array<MoviesResult>
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
  id: number
}

export interface Credits {
  cast: Array<CreditsResult>
}

export interface CreditsResult {
  name: string
  id: number
}

export interface Person {
  birthday: string
  name: string
  profile_path: string
  biography: string
  place_of_birth: string
}

export interface PopularMoviesInTheGenre {
  results: Array<PopularMoviesInTheGenreResult>
}

export interface PopularMoviesInTheGenreResult {
  title: string
  poster_path: string
  release_date: string
  overview: string
  genre_ids: number
  id: number
}

export interface SearchActors {
  results: Array<SearchActorsResult>
}

export interface SearchActorsResult {
  id: number
  name: string
  profile_path: string
}

export interface Recommendations {
  results: Array<RecommendationsResult>
}

export interface RecommendationsResult {
  title: string
  poster_path: string
  id: number
}

export interface Token {
  expires_at: string
  request_token: string
  success: boolean
}

export interface SessionId {
  request_token: string
  success: boolean
  session_id: string
}

export interface AddMovie {
  media_type: string
  media_id: number
  watchlist: boolean
}

export interface Watchlist {
  results: Array<WatchlistResult>
}

export interface WatchlistResult {
  title: string
  id: number
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  sessionId: string | undefined
  constructor( private http: HttpClient,
     ) {}
  sendToken(request_token: SessionId): Observable<SessionId> {
    return this.http.post<SessionId>
    (`${environment.apiUrl}/authentication/session/new${environment.apiKey}` , request_token);
  }

  sendMovie(data: AddMovie): Observable<AddMovie> {
    return this.http.post<AddMovie>
    (`${environment.apiUrl}/account/{account_id}/watchlist${environment.apiKey}&session_id=${this.sessionId}`, data)
  } 

  sendRequestTokenn(token: string){
    const id : SessionId = ({
      success: false,
      request_token: token,
      session_id: ""
      
    });
    this.sendToken(id).subscribe(id => {
      console.log(id)
      this.sessionId = id.session_id
    })
  } 
}


