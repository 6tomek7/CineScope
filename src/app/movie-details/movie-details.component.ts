import { Component, OnInit } from '@angular/core';
import { Movies, MoviesGenres } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  imagePath = "https://image.tmdb.org/t/p/w400"
  public id: any
  public data: any 
  genres: Array<MoviesGenres> | undefined;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"] 
  }

  getTitles(){
    const url = "https://api.themoviedb.org/3/movie/"+this.id+"?api_key=38193385b589296926c46f16b67e1b93"
    this.http.get<Movies>(url).subscribe((res)=>{
      this.data = res
      this.genres = res.genres.map(array => this.convertToMovies(array))
     })
  }
 
  convertToMovies (dto: any) : MoviesGenres {
    return { 
      name: dto.name
    }
  }
}
