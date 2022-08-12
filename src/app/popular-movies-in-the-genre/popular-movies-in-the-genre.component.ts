import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopularMoviesInTheGenre } from '../movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-movies-in-the-genre',
  templateUrl: './popular-movies-in-the-genre.component.html',
  styleUrls: ['./popular-movies-in-the-genre.component.css']
})
export class PopularMoviesInTheGenreComponent implements OnInit {
  private _id: number | undefined
  genres$!: Observable<PopularMoviesInTheGenre>
  urlImage = environment.urlImage

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.genres$ = this.http.get<PopularMoviesInTheGenre>(`${environment.apiUrl}/discover/movie${environment.apiKey}&sort_by=popularity.desc&page=1&with_genres=${this._id}`);
  }
}
