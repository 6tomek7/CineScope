import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
  import { Movies, MoviesResult, MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent implements OnInit {
  imagePath = "https://image.tmdb.org/t/p/w500"
  public data : any 
  constructor(private http: HttpClient) {}
  movies: Array<MoviesResult> | undefined;
  
  getData(){
    const url ='https://api.themoviedb.org/3/movie/popular?api_key=38193385b589296926c46f16b67e1b93&language=en-US&page=1'
    this.http.get<Movies>(url).subscribe((res)=>{
      this.data = res
      this.movies = res.results.map(array => this.convertToMovie(array))
    })}
    

  ngOnInit(): void {
  }
  convertToMovie (dto: any) : MoviesResult {
    return { 
      title: dto.title,
      poster_path: dto.poster_path,
      release_date: dto.release_date
    }
  }
}