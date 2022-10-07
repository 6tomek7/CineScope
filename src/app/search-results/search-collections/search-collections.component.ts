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

  urlImage = environment.urlImage
  collections: Observable <Array<SearchCollectionsResult>> | undefined
  collectionsTotalPages: number | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.collections = this.searchResults.searchCollections(params['name'], 1)
      .pipe(map(results => results.results)) 
    })
  }
}
