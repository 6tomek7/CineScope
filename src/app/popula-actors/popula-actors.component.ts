import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularPeople } from '../movies.service';

@Component({
  selector: 'app-popula-actors',
  templateUrl: './popula-actors.component.html',
  styleUrls: ['./popula-actors.component.css'],
})
export class PopulaActorsComponent implements OnInit {
  popularActors$: Observable<PopularPeople> | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.popularActors$ = this.moviesService.getPopularActors();
  }
}
