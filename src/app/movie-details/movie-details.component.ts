import { IdService } from './../id.service';
import { MoviesGenres, Movies, Credits, CreditsResult, AddMovie, MoviesService, Token, Watchlist } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  urlImage = environment.urlImage
  _id: any
  persons: Array<CreditsResult> | undefined
  data$!: Observable<Movies>
  genres: Array<MoviesGenres> | undefined
  persons$: Observable<Credits> | undefined
  permission = environment.authenticate
  token$: Observable<Token> | undefined
  request_token: string | undefined
  name: string | undefined
  tokenNumber = this.moviesService.tokenRequest?.request_token
  activateButton = false

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private moviesService: MoviesService, 
    private id: IdService
  ) { }
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.data$ = this.http.get<Movies>(`${environment.apiUrl}/movie/${this._id}${environment.apiKey}`);
    this.persons$ = this.http.get<Credits>(`${environment.apiUrl}/movie/${this._id}/credits${environment.apiKey}`);
    if(this.tokenNumber != undefined){this.activateButton = !this.activateButton}
    this.id.add(this._id)
  }

  toggleStates(){
    if(this.tokenNumber != ""){
      this.activateButton = !this.activateButton
    }
  }

  addToWatchlist(){   
    this.moviesService.logicAddMovie() 
  }

  getToken(){
    this.moviesService.getToken() 
    setTimeout(() => {
      this.tokenNumber = this.moviesService.tokenRequest?.request_token
      this.toggleStates()
    }, 1000);
  }
}
