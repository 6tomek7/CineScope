import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchResultsService } from './search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  urlImage = environment.urlImage
  name: string | undefined 
  moviesTotalResults: number | undefined
  companiesTotalResults: number | undefined
  actorsTotalResults: number | undefined
  collectionsTotalResults: number | undefined
  keywoardsTotalResults: number | undefined
  tvShowsTotalResults: number | undefined

  constructor(
    private route: ActivatedRoute,
    private searchResults: SearchResultsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => this.name = value['query'])
    this.actorsResults()
    this.moviesResults()
    // this.collectionsResults()
    this.companiesResults()
    this.keywordsResults()
    this.moviesResults()
  }

  moviesResults(){
    this.searchResults.searchMovies(this.name, 1).subscribe
    (result => this.moviesTotalResults = result.total_results)
  }
  
  actorsResults() {
    this.searchResults.searchActors(this.name, 1).subscribe
      (result => this.actorsTotalResults = result.total_results)
  }

  collectionsResults() {
    this.searchResults.searchCollections("name", 1).subscribe
    (result => this.collectionsTotalResults= result.total_results)
  }

  companiesResults(){
    this.searchResults.searchCompanies(this.name, 1).subscribe
    (result => this.companiesTotalResults = result.total_results)
  }

  keywordsResults() {
    this.searchResults.searchKeywords(this.name, 1).subscribe
    (result => this.keywoardsTotalResults = result.total_results)
  }

  tvShowsResults(){
    this.searchResults.searchTvShows(this.name, 1).subscribe
    (result => this.tvShowsTotalResults = result.total_results)
  }
}
