import { Recommendations, RecommendationsResult } from './../movies.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendations-movies',
  templateUrl: './recommendations-movies.component.html',
  styleUrls: ['./recommendations-movies.component.css']
})
export class RecommendationsMoviesComponent implements OnInit {
  urlImage = environment.urlImage200
  private _id: string | undefined
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }
  movies: Array<RecommendationsResult> | undefined;
  data$!: Observable<Recommendations>

  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"]
    this.data$ = this.http.get<Recommendations>(`${environment.apiUrl}/movie/${this._id}/recommendations${environment.apiKey}`)
  }
}
