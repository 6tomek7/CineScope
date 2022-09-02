import { MoviesService,  Watchlist } from './../movies.service';
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
  constructor(
    private http: HttpClient,
    private moviesService: MoviesService
  ) { }
  watchlist$: Observable<Watchlist> | undefined
  ngOnInit(): void {
    console.log(  this.moviesService.tokenRequest?.request_token)
    console.log("Session id in list-of-movies..",this.moviesService.session_Id?.session_id)
    this.watchlist$ = this.http.get<Watchlist>
    (`${environment.apiUrl}/account/{account_id}/watchlist/movies${environment.apiKey}&session_id=${this.moviesService.session_Id?.session_id}&sort_by=created_at.asc`)
  }
}