import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tmdb',
  templateUrl: './profile-tmdb.component.html',
  styleUrls: ['./profile-tmdb.component.css']
})
export class ProfileTmdbComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    if(this.moviesService.session_Id?.session_id != undefined){
      this.moviesService.getProfileDetails()
    }
  }
}
