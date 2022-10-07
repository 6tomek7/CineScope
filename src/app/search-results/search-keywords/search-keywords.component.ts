import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchKeywordsResult, SearchResultsService } from '../search-results.service';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent implements OnInit{
  
  urlImage = environment.urlImage
  keywords: Observable <Array<SearchKeywordsResult>> | undefined
  keywordsTotalPages: number | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keywords = this.searchResults.searchKeywords(params['name'], 1)
      .pipe(map(results => results.results)) 
    })
  }
}
