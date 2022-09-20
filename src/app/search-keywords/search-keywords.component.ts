import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesService, SearchKeywordsResult } from '../movies.service';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent implements OnInit {
  @Input()
  resultsActivator: boolean | undefined

  @Output()
  totalResults = new EventEmitter<number>()
  
  urlImage = environment.urlImage
  keywords$: Array<SearchKeywordsResult> | undefined
  keywordsTotalPages: number | undefined
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getKeywords()
  }

  getKeywords(){
    this.moviesService.searchKeywords("Tina", 1).subscribe((res) => {
      this.keywords$ = res.results.map(array => this.convertToCollections(array))
      this.keywordsTotalPages = res.total_pages
      this.totalResults.emit(res.total_results)
    })
  }

  convertToCollections(dto: any): SearchKeywordsResult {
    return {
      id: dto.id,
      name: dto.name,
    }
  }
}
