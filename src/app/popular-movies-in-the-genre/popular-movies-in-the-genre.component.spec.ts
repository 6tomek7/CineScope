import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesInTheGenreComponent } from './popular-movies-in-the-genre.component';

describe('PopularMoviesInTheGenreComponent', () => {
  let component: PopularMoviesInTheGenreComponent;
  let fixture: ComponentFixture<PopularMoviesInTheGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMoviesInTheGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMoviesInTheGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
