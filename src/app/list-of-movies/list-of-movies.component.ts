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
    const id: SessionId = ({
      id: 0,
      request_token: "def02006110d4c9437b63695232916b6f71c2e68/allow"
    });
    
    this.MoviesService.addPost(id).subscribe(id => {
      console.log(id);
    })
  }
}