import { MoviesService, SearchCollectionsResult } from './../movies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-collections',
  templateUrl: './search-collections.component.html',
  styleUrls: ['./search-collections.component.css']
})
export class SearchCollectionsComponent implements OnInit {
  @Input()
  resultsActivator: boolean | undefined

  @Output()
  totalResults = new EventEmitter<number>()
  urlImage = environment.urlImage
  collections$: Array<SearchCollectionsResult> | undefined
  collectionsTotalPages: number | undefined

  constructor( private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getCollections()
  }

  getCollections(){
    this.moviesService.searchCollections("Tina", 1).subscribe((res) => {
      this.collections$ = res.results.map(array => this.convertToCollections(array))
      this.collectionsTotalPages = res.total_pages
      this.totalResults.emit(res.total_results)
    })
  }

  convertToCollections(dto: any): SearchCollectionsResult {
    return {
      id: dto.id,
      name: dto.name,
      poster_path: dto.poster_path
    }
  }
}
