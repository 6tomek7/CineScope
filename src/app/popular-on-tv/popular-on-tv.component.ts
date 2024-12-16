import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies, MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular-on-tv',
  templateUrl: './popular-on-tv.component.html',
  styleUrls: ['./popular-on-tv.component.css'],
})
export class PopularOnTvComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  popularOnTv$: Observable<Movies> | undefined;

  ngOnInit(): void {
    this.popularOnTv$ = this.moviesService.getPopularOnTv();
  }
}
