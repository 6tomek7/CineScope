import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule, RoutingComponents } from './details-routing.module';

@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
  ],
})
export class DetailsModule { }
