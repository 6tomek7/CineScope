import { MoviesGenres, Movies, Credits, CreditsResult } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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
  urlId = environment.urlId
  apiKey = environment.apiKey
  urlCasts = environment.urlCast
  urlCredits = environment.urlCredits
  private _id: any
  data: any
  movies: Array<CreditsResult> | undefined
  data$!: Observable<Movies>;
  genres: Array<MoviesGenres> | undefined;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.data$ = this.http.get<Movies>(this.urlId+this._id+this.apiKey);
  }

  getCasts(){
    this.http.get<Credits>(this.urlCasts+this._id+this.urlCredits+this.apiKey).subscribe((res)=>{
      this.data = res
      this.movies = res.cast.map(array => this.convertToMovie(array))
    })}
    

  convertToMovie (dto: any) : CreditsResult {
    return { 
     name: dto.name
    }
  }
}


