import { Component, OnInit } from '@angular/core';
import { Movies, MoviesService } from '../movies.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  data$: Observable<Movies> | undefined;

  ngOnInit(): void {
    this.data$ = this.moviesService.getPopularMovies();
  }
}
