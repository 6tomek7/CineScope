import { MoviesService, SessionId, Token } from './../movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  }

  getToken(){
    this.token$ = this.http.get<Token>(`${environment.apiUrl}/authentication/token/new${environment.apiKey}`);
  }
  
  sendToken(session_id: string){
    const id : SessionId = ({
      success: false,
      request_token: session_id
    });

    this.MoviesService.sendToken(id).subscribe(id => {
      console.log(id);
    })
  }
}