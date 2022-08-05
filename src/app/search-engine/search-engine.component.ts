import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchMoviesResult } from '../movies.service';


@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})


export class SearchEngineComponent implements OnInit {

  constructor(private http: HttpClient) {}
  titles: Array<SearchMoviesResult> | undefined;

  ngOnInit(): void {}
}
