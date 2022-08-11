import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PopularMoviesResult, PopularMovies } from '../movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent implements OnInit {
  urlImage = environment.urlImage
  urlPopularMovies = environment.urlPopularMovies
  constructor(private http: HttpClient) {}
  movies: Array<PopularMoviesResult> | undefined;
  
  getData(){
    this.http.get<PopularMovies>(this.urlPopularMovies).subscribe((res)=>{
      this.movies = res.results.map(array => this.convertToMovie(array))
    })}
    

  ngOnInit(): void {
  }
  convertToMovie (dto: any) : PopularMoviesResult {
    return { 
      title: dto.title,
      poster_path: dto.poster_path,
      release_date: dto.release_date,
      overview: dto.overview,
      genre_ids: dto.genre_ids,
      id: dto.id
    }
  }
}