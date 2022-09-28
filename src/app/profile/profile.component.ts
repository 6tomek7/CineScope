import { OAuthService } from 'angular-oauth2-oidc';
import { GoogleService, UserInfo } from './../google.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  userInfo: UserInfo | undefined
  constructor(   private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private googleService: GoogleService,
    private oAuthService: OAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });

    this.googleService.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  isLoggedInGoogle(): boolean{
    return this.oAuthService.hasValidAccessToken()
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
