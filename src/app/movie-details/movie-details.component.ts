import {
  Movies,
  Credits,
  CreditsResult,
  MoviesService,
} from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  urlImage = environment.urlImage;
  id: string | undefined;
  data$: Observable<Movies> | undefined;
  persons$: Observable<Array<CreditsResult>> | undefined;
  permission = environment.authenticate;
  tokenNumber = this.moviesService.tokenRequest?.request_token;
  actuallyUrl = window.location;
  approved: string | undefined;
  show: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.approved = params['token'];
      this.moviesService.getApproved(this.approved);
      this.data$ = this.http.get<Movies>(
        `${environment.apiUrl}/movie/${this.id}${environment.apiKey}`,
      );
      this.persons$ = this.http
        .get<Credits>(
          `${environment.apiUrl}/movie/${this.id}/credits${environment.apiKey}`,
        )
        .pipe(map((cast) => cast.cast));
      this.moviesService.getRoute(this.id);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      if (this.approved != undefined) {
        this.moviesService.logicAddMovie();
      }
    });
  }

  addToWatchlist() {
    this.moviesService.getToken();
    this.moviesService.logicAddMovie();
    setTimeout(() => {
      this.tokenNumber = this.moviesService.tokenRequest?.request_token;
      if (this.moviesService.session_Id === undefined) {
        this.show = true;
      } else this.show = false;
    }, 1000);
  }
}
