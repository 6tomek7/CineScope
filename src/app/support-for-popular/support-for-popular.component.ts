import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-for-popular',
  templateUrl: './support-for-popular.component.html',
  styleUrls: ['./support-for-popular.component.css'],
})
export class SupportForPopularComponent implements OnInit {
  showMovies = false;
  showActors = false;
  showOnTv = false;

  ngOnInit(): void {
    this.updateView('movies');
  }

  updateView(view: 'movies' | 'actors' | 'onTv') {
    this.showMovies = view === 'movies';
    this.showActors = view === 'actors';
    this.showOnTv = view === 'onTv';
  }
}
