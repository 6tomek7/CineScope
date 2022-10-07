import { Observable } from 'rxjs/internal/Observable';
import { SearchActorsResult, SearchResultsService } from './../search-results.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.css']
})
export class SearchActorsComponent implements OnInit {
  actors: Observable <Array<SearchActorsResult>> | undefined
  urlImage = environment.urlImage

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.actors = this.searchResults.searchActors(params['query'], params['page'])
      .pipe(map(results => results.results)) 
    })
  }
}
