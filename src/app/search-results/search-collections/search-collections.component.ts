import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchCollectionsResult, SearchResultsService } from '../search-results.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-search-collections',
  templateUrl: './search-collections.component.html',
  styleUrls: ['./search-collections.component.css']
})
export class SearchCollectionsComponent implements OnInit{
  collections: Observable <Array<SearchCollectionsResult>> | undefined
  urlImage = environment.urlImage
  collectionsTotalPages: number | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => 
      this.collections = this.searchResults.searchCollections(value['query'], value['page'])
      .pipe(map(results => results.results))) 
  }
}
