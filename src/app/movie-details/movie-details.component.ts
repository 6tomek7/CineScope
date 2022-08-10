import { Component, OnInit } from '@angular/core';
import { Movies, MoviesGenres } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  public id: any
  public data: any 
  genres: Array<MoviesGenres> | undefined;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"] 
  }

  getTitles(){
    this.http.get<Movies>(this.urlId+this.id+this.urlIdApi+this.apiKey).subscribe((res)=>{
      this.data = res
      this.genres = res.genres.map(array => this.convertToMovies(array))
     })
  }
 
  convertToMovies (dto: any) : MoviesGenres {
    return { 
      name: dto.name
    }
  }
}
