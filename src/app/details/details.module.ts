import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DetailsRoutingModule,
  RoutingComponents,
} from './details-routing.module';
import { RecommendationsMoviesComponent } from '../recommendations-movies/recommendations-movies.component';
import { TrnsformTimePipe } from '../shared/trnsform-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RoutingComponents,
    RecommendationsMoviesComponent,
    TrnsformTimePipe,
  ],
  imports: [CommonModule, DetailsRoutingModule, NgbModule, SharedModule],
})
export class DetailsModule {}
