import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TrnsformTimePipe } from './shared/trnsform-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendationsMoviesComponent } from './recommendations-movies/recommendations-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TrnsformTimePipe,
    RecommendationsMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

