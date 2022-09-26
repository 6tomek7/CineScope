import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrnsformTimePipe } from './shared/trnsform-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendationsMoviesComponent } from './recommendations-movies/recommendations-movies.component';
import { NgToastModule } from 'ng-angular-popup';
import { ToastComponent } from './toast/toast.component';
import { ModalComponent } from './modal/modal.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { PopularOnTvComponent } from './popular-on-tv/popular-on-tv.component';
import { PopulaActorsComponent } from './popula-actors/popula-actors.component';
import { SupportForPopularComponent } from './support-for-popular/support-for-popular.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, } from 'angularx-social-login';
import { SearchEngineModule } from './search-engine/search-engine.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TrnsformTimePipe,
    RecommendationsMoviesComponent,
    ToastComponent,
    ModalComponent,
    LoginWindowComponent,
    PopularOnTvComponent,
    PopulaActorsComponent,
    SupportForPopularComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgToastModule,
    ReactiveFormsModule,
    SocialLoginModule,
    SearchEngineModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('431115505718006'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

