import { MoviesService, SessionId } from './../movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Token } from '../movies.service';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private MoviesService: MoviesService
  ) { }
  permission = environment.authenticate
  token$: Observable<Token> | undefined

  ngOnInit(): void {
    this.token$ = this.http.get<Token>(`${environment.apiUrl}/authentication/token/new${environment.apiKey}`);
  }

  getToken() {
    this.http.get<Token>(`${environment.apiUrl}/authentication/token/new${environment.apiKey}`).subscribe((token) => {
      console.log(token); 
  })}
  

  postId(){
    const id : SessionId = ({
      success: false,
      request_token: "c2976b27c8fd7277e890eabf25ea6ef7546c76d5"
    });

    this.MoviesService.sendToken(id).subscribe(id => {
      console.log(id);
    })
  }
}