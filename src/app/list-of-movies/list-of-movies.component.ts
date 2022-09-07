import { MoviesService, WatchlistMovies, WatchlistMoviesResult } from './../movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent implements OnInit {
  info: string | undefined
  constructor(
    private http: HttpClient,
    private moviesService: MoviesService
  ) { }
  watchlistMovies$: Observable<Array<WatchlistMoviesResult>> | undefined

  ngOnInit(): void {
    if(this.moviesService.session_Id?.session_id != undefined){
      this.watchlistMovies$ = this.http.get<WatchlistMovies>
      (`${environment.apiUrl}/account/{account_id}/watchlist/movies${environment.apiKey}&session_id=${this.moviesService.session_Id?.session_id}&sort_by=created_at.asc`)
        .pipe(
          map(results => results.results)
        )
    }
    if(this.moviesService.session_Id?.session_id === undefined){
      this.info = "Local storage"
      this.loadLocalData()
    }
  }

  loadLocalData(){
    localStorage.getItem("session")
    this.watchlistMovies$ = of(JSON.parse(localStorage.getItem("session")||''))
  }
}