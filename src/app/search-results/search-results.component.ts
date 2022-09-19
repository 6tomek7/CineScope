import { Movies, MoviesResult, SearchActors, SearchActorsResult } from './../movies.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  actors: Array<SearchActorsResult> | undefined
  urlImage = environment.urlImage
  name: string | undefined
  moviesResult$: Array<MoviesResult> | undefined
  moviesTotalPages: number | undefined
  moviesTotalResults: number | undefined
  actorsTotalPages: number | undefined
  actorsTotalResults: number | undefined
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"]
    this.getMovies()
    this.getActors()
  }

  getMovies(){
    this.http.get<Movies>(`${environment.apiUrl}/search/movie${environment.apiKey}&language=en-US&page=1&query=${this.name}`).subscribe((res)=>{
      this.moviesResult$ = res.results.map(array => this.convertToMovies(array))
      this.moviesTotalPages = res.total_pages
      this.moviesTotalResults = res.total_results
    })
  }

  getActors(){
    this.http.get<SearchActors>(`${environment.apiUrl}/search/person${environment.apiKey}&query=${this.name}`).subscribe((res)=>{
      this.actors = res.results.map(array => this.convertToActors(array))
      this.actorsTotalPages = res.total_pages
      this.actorsTotalResults = res.total_results
    })
  }

  convertToMovies (dto:any) : MoviesResult {
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
