import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MoviesResult, PopularMovies } from '../movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent implements OnInit {
  urlImage = environment.urlImage
  constructor(private http: HttpClient) {}
  movies: Array<MoviesResult> | undefined;
  
  getData(){
    this.http.get<PopularMovies>(`${environment.apiUrl}/movie/popular?api_key=38193385b589296926c46f16b67e1b93&language=en-US&page=1`).subscribe((res)=>{
      this.movies = res.results.map(array => this.convertToMovie(array))
    })}
    
  ngOnInit(): void {
  }
  convertToMovie (dto: any) : MoviesResult {
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