import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../movies.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  urlImage = environment.urlImage;
  private _id: number | undefined;
  person$!: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    this.person$ = this.http.get<Person>(
      `${environment.apiUrl}/person/${this._id}${environment.apiKey}`,
    );
  }
}
