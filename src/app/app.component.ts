import { GoogleService, UserInfo } from './google.service';
import { MoviesService } from './movies.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginWindowComponent } from './login-window/login-window.component';
import { FormGroup } from '@angular/forms';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedinFb = false
  aouthActive = true
  userInfo: UserInfo | undefined
  
  constructor(private modalService: NgbModal,
    public moviesService: MoviesService,
    private socialAuthService: SocialAuthService,
    private googleService: GoogleService,
    private readonly oAuthService: OAuthService) { }
  
  ngOnInit(): void {
    if(window.location.search === ""){
      this.moviesService.getToken()
    }
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedinFb = user != null;
      this.aouthLogin()
    });
    this.googleService.userProfileSubject.subscribe( info => {
      this.userInfo = info
      this.aouthLogin()
      console.log(info)
    })
  }  

  aouthLogin(){
    if(this.isLoggedinFb || this.aouthActive === true) {
      this.aouthActive = false
    }
  }

  isLoggedInGoogle(): boolean {
    return this.googleService.isLoggedIn()
  }
  signOutFb(): void {
    this.socialAuthService.signOut();
  }

  signOutGoogle() {
    this.googleService.signOut()
    console.log("sign out from Google")
  }
  
  loginWithGoogle(){
    this.oAuthService.initLoginFlow()
  }

  openModal() {
    const modalRef = this.modalService.open(LoginWindowComponent);
  }
  
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}