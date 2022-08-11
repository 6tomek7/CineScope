import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../movies.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  urlPersonDetails = environment.urlPersonDetails
  apiKey = environment.apiKey
  urlImage = environment.urlImage
  private _id: any
  person$!: Observable<Person>

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params["id"] 
    this.person$ = this.http.get<Person>( this.urlPersonDetails+this._id+this.apiKey);
  }
}
