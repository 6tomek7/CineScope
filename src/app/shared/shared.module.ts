import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingBarComponent } from './sliding-bar/sliding-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SlidingBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SlidingBarComponent],
})
export class SharedModule {}
