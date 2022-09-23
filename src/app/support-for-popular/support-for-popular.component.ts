import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-for-popular',
  templateUrl: './support-for-popular.component.html',
  styleUrls: ['./support-for-popular.component.css']
})
export class SupportForPopularComponent implements OnInit {
  showMovies = false
  showActors = false
  showOnTv = false

  constructor() { }

  ngOnInit(): void {
    this.viewMovies()
  }

  viewMovies(){
    this.showMovies = !this.showMovies
    this.showActors = false
    this.showOnTv = false
  }

  viewActors(){
    this.showActors = !this.showActors
    this.showMovies = false
    this.showOnTv= false
  }

  viewOnTv(){
    this.showOnTv = !this.showOnTv
    this.showMovies = false
    this.showActors = false
  }
}
