import { SearchActors, SearchActorsResult } from './../movies.service';
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
  constructor(private http: HttpClient) {}
  titles: Array<MoviesResult> | undefined
  actors: Array<SearchActorsResult> | undefined
  name = ""

  getTitles(){
    this.http.get<SearchMovies>(`${environment.apiUrl}/search/movie${environment.apiKey}&language=en-US&query=${this.name}`).subscribe((res)=>{
      this.titles = res.results.map(array => this.convertToTitles(array))
    })
  }

  getActors(){
    this.http.get<SearchActors>(`${environment.apiUrl}/search/person${environment.apiKey}&query=${this.name}`).subscribe((res)=>{
      this.actors = res.results.map(array => this.convertToActors(array))
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

  convertToActors (dto:any) : SearchActorsResult {
    return {
      id: dto.id,
      name: dto.name,
      profile_path: dto.profile_path
    }
  }
}
