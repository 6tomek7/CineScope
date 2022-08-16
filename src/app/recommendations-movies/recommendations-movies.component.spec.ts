import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsMoviesComponent } from './recommendations-movies.component';

describe('RecommendationsMoviesComponent', () => {
  let component: RecommendationsMoviesComponent;
  let fixture: ComponentFixture<RecommendationsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
