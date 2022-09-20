import { MoviesService} from './../movies.service';
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
  showCompanies = false
  showActors = false
  showCollections = false
  showKeywords = false
  showTvShows = false
  moviesTotalResults: number | undefined
  companiesTotalResults: number | undefined
  actorsTotalResults: number | undefined
  collectionsTotalResults: number | undefined
  keywoardsTotalResults: number | undefined
  tvShowsTotalResults: number | undefined

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
  
  actorsResults(result: number) {
    this.actorsTotalResults = result
  }

  collectionsResults(result: number) {
    this.collectionsTotalResults = result
  }

  companiesResults(result: number){
    this.companiesTotalResults = result
  }

  keywordsResults(result: number) {
    this.keywoardsTotalResults = result
  }

  tvShowsResults(result: number){
    this.tvShowsTotalResults = result
  }
  
  previewMovies(){
    this.showMovies = !this.showMovies
  }

  previewCompanies(){
    this.showCompanies = !this.showCompanies
  }

  previewActors(){
    this.showActors = !this.showActors
  }

  previewCollections(){
    this.showCollections = !this.showCollections
  }

  previewKeywords(){
    this.showKeywords = !this.showKeywords
  }

  previewTvShows(){
    this.showTvShows = !this.showTvShows
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
