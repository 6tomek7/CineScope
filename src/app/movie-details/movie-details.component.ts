import { MoviesGenres, Movies, Credits, CreditsResult } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  urlImage = environment.urlImage
  private _id: string | undefined
  persons: Array<CreditsResult> | undefined
  data$!: Observable<Movies>
  genres: Array<MoviesGenres> | undefined
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.data$ = this.http.get<Movies>(`${environment.apiUrl}/movie/${this._id}${environment.apiKey}`);
  }

  getCasts(){
    this.http.get<Credits>(`${environment.apiUrl}/movie/${this._id}/credits${environment.apiKey}`).subscribe((res)=>{
      this.persons = res.cast.map(array => this.convertToMovie(array))
    })}
    
  convertToMovie (dto: any) : CreditsResult {
    return { 
     name: dto.name,
     id: dto.id
    }
  }
}


