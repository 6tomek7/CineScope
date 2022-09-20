import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesService, SearchTvShowsResult } from '../movies.service';

@Component({
  selector: 'app-search-tv-shows',
  templateUrl: './search-tv-shows.component.html',
  styleUrls: ['./search-tv-shows.component.css']
})
export class SearchTvShowsComponent implements OnInit {
  @Input()
  resultsActivator: boolean | undefined

  @Output()
  totalResults = new EventEmitter<number>()

  urlImage = environment.urlImage
  tvShows$: Array<SearchTvShowsResult> | undefined
  tvShowsTotalPages: number | undefined
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getTvShows()
  }

  getTvShows(){
    this.moviesService.searchTvShows("Tina", 1).subscribe((res) => {
      this.tvShows$ = res.results.map(array => this.convertToCollections(array))
      this.tvShowsTotalPages = res.total_pages
      this.totalResults.emit(res.total_results)
    })
  }

  convertToCollections(dto: any): SearchTvShowsResult {
    return {
      id: dto.id,
      name: dto.name,
      poster_path: dto.poster_path
    }
  }
}
