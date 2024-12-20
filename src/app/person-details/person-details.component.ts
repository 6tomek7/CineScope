import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService, Person } from '../movies.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  urlImage = environment.urlImage;
  person$!: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getPersonDetails();
  }

  private getPersonDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.person$ = this.moviesService.getPersonDetails(id);
  }
}
