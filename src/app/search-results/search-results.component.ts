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
  showPagination: boolean | undefined
  totalPages: number | undefined
  pathName: string | undefined
  urlImage = environment.urlImage
  name: string | undefined 
  page: number | undefined
  moviesTotalResults: number | undefined
  companiesTotalResults: number | undefined
  actorsTotalResults: number | undefined
  collectionsTotalResults: number | undefined
  keywordsTotalResults: number | undefined
  tvShowsTotalResults: number | undefined

  constructor(
    private route: ActivatedRoute,
    private searchResults: SearchResultsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      this.page = value['page']
      this.name = value['query']
      this.tvShowsResults()
      this.moviesResults()
      this.actorsResults()
      this.collectionsResults()
      this.companiesResults()
      this.keywordsResults()
    })
    this.route.params.subscribe(() => {
      this.pathName = location.pathname.substr(8,6) 
      this.tvShowsResults()
      this.moviesResults()
      this.actorsResults()
      this.collectionsResults()
      this.companiesResults()
      this.keywordsResults()
    })
  }

  moviesResults(){
    this.searchResults.searchMovies(this.name, this.page).subscribe
    (result => {
      this.moviesTotalResults = result.total_results
      this.checkPagination(result.total_pages, "movies")
    })
  }
  
  actorsResults() {
    this.searchResults.searchActors(this.name, this.page).subscribe
    (result => {
      this.actorsTotalResults = result.total_results
      this.checkPagination(result.total_pages, "people")
    })
  }

  collectionsResults() {
    this.searchResults.searchCollections(this.name, this.page).subscribe
    (result => {
      this.checkPagination(result.total_pages, "collec")
      this.collectionsTotalResults = result.total_results})
  }

  companiesResults(){
    this.searchResults.searchCompanies(this.name, this.page).subscribe
    (result => {
      this.checkPagination(result.total_pages, "compan")
      this.companiesTotalResults = result.total_results})
  }

  keywordsResults() {
    this.searchResults.searchKeywords(this.name, this.page).subscribe
    (result => {
      this.checkPagination(result.total_pages, "keywor")
      this.keywordsTotalResults = result.total_results})
  }

  tvShowsResults(){
    this.searchResults.searchTvShows(this.name, this.page).subscribe
    (result => {
      this.checkPagination(result.total_pages, "tvShow")
      this.tvShowsTotalResults = result.total_results})
  }

  checkPagination(totalPages: number, category: string){
    if(this.pathName === category && totalPages > 1 ){
      this.showPagination = true
      this.totalPages = totalPages
    } 
    if(this.pathName === category && totalPages === 1 ){
      this.showPagination = false
    } 
  }
}
