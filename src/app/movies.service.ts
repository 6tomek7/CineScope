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
  request_token: any
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
  tokenRequest: Token | undefined
  constructor( private http: HttpClient,
     ) {}
     
     
  sendToken(request_token: SessionId): Observable<SessionId> {
    return this.http.post<SessionId>
    (`${environment.apiUrl}/authentication/session/new${environment.apiKey}` , request_token)
  }

  sendMovie(data: AddMovie): Observable<AddMovie> {
    return this.http.post<AddMovie>
    (`${environment.apiUrl}/account/{account_id}/watchlist${environment.apiKey}&session_id=${this.sessionId}`, data)
  } 

  getToken(){
    if(this.tokenRequest?.request_token === undefined){
      // GET token
      fetch(`${environment.apiUrl}/authentication/token/new${environment.apiKey}`)
      .then(response => response.json())
      .then((data) =>{
        this.tokenRequest = this.convertTokenRequest(data)
        console.log(data)
        console.log("tokenRequest...", this.tokenRequest.request_token)
      })
    }
  }

  addSessionId(){
    if(this.tokenRequest?.request_token != undefined)
    fetch(`${environment.apiUrl}/authentication/session/new${environment.apiKey}`, {
    method: "POST",
    body: JSON.stringify({
      request_token: this.tokenRequest?.request_token,
    }),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

   convertTokenRequest(response: Token): Token {
    return {
        expires_at: response.expires_at,
        request_token: response.request_token,
        success: response.success,
    }
  }
}

