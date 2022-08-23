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

  addMovie (){
    const movie : AddMovie = ({
      media_type: "movie",
      media_id: this._id,
      watchlist: true
    });
    this.moviesService.sendMovie(movie).subscribe(id => {
      console.log(id);
  })} 

  getToken(){
  this.moviesService.getToken().subscribe(request_token =>
    this.request_token = request_token.request_token)
  }
  
  sendToken(data: string){
   this.moviesService.sendRequestTokenn(data)
  }

  watchlist(){
    if(this.moviesService.sessionId != undefined){
      this.addMovie ()
      alert("added to watchlist")
    }
    else if(this.request_token != undefined){
      alert("now you can add movie to watchlist")
      this.sendToken(this.request_token)
      this.name = ""

      if(this.moviesService.sessionId != undefined){
        this.addMovie ()
        alert("added to watchlist")
      }
    }
    else if(this.moviesService.request_token === undefined) {
      this.getToken()
      alert("token undefined - allow data to be read and written on your behalf")
      this.name = "allow data to be read and written on your behalf"
    }
  }
}
