import { PersonDetailsComponent } from './person-details/person-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { PopularMoviesInTheGenreComponent } from './popular-movies-in-the-genre/popular-movies-in-the-genre.component';

const routes: Routes = [
  { path: "popular-movies", component: PopularMoviesComponent },
  { path: "search-engine", component: SearchEngineComponent },
  { path: "details/:id", component: MovieDetailsComponent },
  { path: "person/:id", component: PersonDetailsComponent },
  { path: "genre/:id", component: PopularMoviesInTheGenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [PopularMoviesComponent, SearchEngineComponent, MovieDetailsComponent, PersonDetailsComponent, PopularMoviesInTheGenreComponent]
