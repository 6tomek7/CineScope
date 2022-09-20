import { SearchActors, SearchActorsResult, MoviesService, SearchCompanies } from './../movies.service';
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
  urlImage = environment.urlImage
  name: string | undefined
  allResults: number | undefined
  showMovies = false
  showCompanies: boolean | undefined
  showActors: boolean | undefined
  showCollections: boolean | undefined
  showKeywoards: boolean | undefined
  showTvShows: boolean | undefined
  moviesTotalResults: number | undefined

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"]
  }

  moviesResults(results: number){
    this.moviesTotalResults = results
  }

  previewMovies(){
    this.showMovies = true
  }

  previewCompanies(){
    this.showCompanies = true
  }

  previewActors(){
    this.showActors = true
  }

  previewCollections(){
    this.showCollections = true
  }

  previewKeywoards(){
    this.showKeywoards = true
  }

  previewTvShows(){
    this.showTvShows = true
  }


  allSearchMethod(search:string, page: number){
    this.moviesService.searchCompanies(search, page)
    
    
      // this.moviesService.searchCompanies
      // this.moviesService.searchActors
      // this.moviesService.searchCollections
      // this.moviesService.searchKeywoards
      // this.moviesService.searchMovies
      // this.moviesService.searchTvShows
  }
}
