import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SearchKeywordsResult, SearchResultsService } from '../search-results.service';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent implements OnInit{
  keywords: Observable <Array<SearchKeywordsResult>> | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keywords = this.searchResults.searchKeywords(params['query'], params['page'])
      .pipe(map(results => results.results)) 
    })
  }
}
