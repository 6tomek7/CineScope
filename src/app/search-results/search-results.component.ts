import { Movies } from './../movies.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  name: string | undefined
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"]
    this.http.get<Movies>(`${environment.apiUrl}/search/movie${environment.apiKey}&language=en-US&query=${this.name}`)
  }

}
