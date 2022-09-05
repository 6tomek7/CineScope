import { MoviesService, Watchlist, WatchlistResult } from './../movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent implements OnInit {
  data: Watchlist | undefined
  watchlistResult: WatchlistResult | undefined
  info: string | undefined
  constructor(
    private http: HttpClient,
    private moviesService: MoviesService
  ) { }
  watchlist$: Observable<Watchlist> | undefined
  ngOnInit(): void {
    if(this.moviesService.session_Id?.session_id != undefined){
    this.watchlist$ = this.http.get<Watchlist>
    (`${environment.apiUrl}/account/{account_id}/watchlist/movies${environment.apiKey}&session_id=${this.moviesService.session_Id?.session_id}&sort_by=created_at.asc`)}
    if(this.moviesService.session_Id?.session_id === undefined){
      this.info = "Local storage"
      this.loadLocalData()
    }
  }

  loadLocalData(){
    let data = localStorage.getItem("session")
    alert(data)
  }
}