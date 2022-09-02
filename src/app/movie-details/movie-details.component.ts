import { MoviesGenres, Movies, Credits, CreditsResult, AddMovie, MoviesService, Token } from './../movies.service';
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
  private _id: any
  persons: Array<CreditsResult> | undefined
  data$!: Observable<Movies>
  genres: Array<MoviesGenres> | undefined
  persons$: Observable<Credits> | undefined
  permission = environment.authenticate
  token$: Observable<Token> | undefined
  request_token: string | undefined
  name: string | undefined
  tokenNumber = ""
  activateButton = false

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private moviesService: MoviesService,
  ) { }
 
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.data$ = this.http.get<Movies>(`${environment.apiUrl}/movie/${this._id}${environment.apiKey}`);
    this.persons$ = this.http.get<Credits>(`${environment.apiUrl}/movie/${this._id}/credits${environment.apiKey}`);
  }

  toggleStates(){
    if(this.tokenNumber != ""){
      this.activateButton = !this.activateButton
    }
  }

  addMovie (){
    const movie : AddMovie = ({
      media_type: "movie",
      media_id: this._id,
      watchlist: true
    });
    this.moviesService.sendMovie(movie).subscribe(id => {
      console.log(id);
  })} 

  addToWatchlist(){   
    this.moviesService.addSessionId() 
  }

  getToken(){
    this.moviesService.getToken() 
    setTimeout(() => {
      this.tokenNumber = this.moviesService.tokenRequest?.request_token
      this.toggleStates()
    }, 1000);
  }
}

/*
if(this.moviesService.sessionId != undefined){
  this.addMovie ()
}
else if(this.request_token != undefined){
  this.sendToken(this.request_token)
  this.name = ""

  if(this.moviesService.sessionId != undefined){
    this.addMovie ()
  }
}
else if(this.moviesService.tokenRequest?.request_token === undefined) {
  this.moviesService.addToWatchlist()
  this.name = "allow data to be read and written on your behalf"
  this.nrTokena = this.moviesService.tokenRequest?.request_token
  console.log("nrTokena...",this.nrTokena)
}
} 
*/
