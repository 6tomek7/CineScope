import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResultsService, SearchTvShowsResult } from '../search-results.service';

@Component({
  selector: 'app-search-tv-shows',
  templateUrl: './search-tv-shows.component.html',
  styleUrls: ['./search-tv-shows.component.css']
})
export class SearchTvShowsComponent {
 
  urlImage = environment.urlImage
  tvShows: Observable <Array<SearchTvShowsResult>> | undefined
  tvShowsTotalPages: number | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tvShows = this.searchResults.searchTvShows(params['query'], params['page'])
      .pipe(map(results => results.results)) 
    })
  }
}
