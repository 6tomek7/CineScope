import { MoviesService, Token, Watchlist } from './../movies.service';
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
   this.watchlist$ = this.http.get<Watchlist>
    (`${environment.apiUrl}/account/{account_id}/watchlist/movies${environment.apiKey}&session_id=${this.moviesService.sessionId}&sort_by=created_at.asc`);
  }
}