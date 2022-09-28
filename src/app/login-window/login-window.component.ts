import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private movieService: MoviesService) { }

  login(nick: string, password: string){
    this.movieService.postLogin(nick, password)
  }
}
