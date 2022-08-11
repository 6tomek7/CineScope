import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchMovies, MoviesResult } from '../movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})

export class SearchEngineComponent implements OnInit {
  urlImage = environment.urlImage
  urlSearchMovies = environment.urlSearchMovies
  constructor(private http: HttpClient) {}
  titles: Array<MoviesResult> | undefined;
  name = ""

  getTitles(){
    this.http.get<SearchMovies>(this.urlSearchMovies+this.name).subscribe((res)=>{
      this.titles = res.results.map(array => this.convertToTitles(array))
    })
  }
  
  ngOnInit(): void {}
  convertToTitles (dto:any) : MoviesResult {
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
