import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MoviesResult } from '../../movies.service';
import { SearchResultsService } from '../search-results.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  
  urlImage = environment.urlImage
  moviesResult: Observable <Array<MoviesResult>> | undefined
  moviesTotalPages: number | undefined
  moviesTotalResults!: number

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.moviesResult = this.searchResults.searchMovies(params['query'], params['page'])
      .pipe(map(results => results.results)) 
    })
  }
}
