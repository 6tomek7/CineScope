import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule, RoutingComponents } from './details-routing.module';
import { RecommendationsMoviesComponent } from '../recommendations-movies/recommendations-movies.component';
import { TrnsformTimePipe } from '../shared/trnsform-time.pipe';

@NgModule({
  declarations: [
    RoutingComponents,
    RecommendationsMoviesComponent,
    TrnsformTimePipe
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
  ],
})
export class DetailsModule { }
