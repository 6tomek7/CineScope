import { MoviesGenres, Movies } from './../movies.service';
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
  urlIdApi = environment.urlIdApi
  apiKey = environment.apiKey
  private _id: any
  data$!: Observable<Movies>;
  genres: Array<MoviesGenres> | undefined;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.data$ = this.http.get<Movies>(this.urlId+this._id+this.urlIdApi+this.apiKey);
  }

 
}


