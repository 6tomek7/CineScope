import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesInTheGenreComponent } from './popular-movies-in-the-genre/popular-movies-in-the-genre.component';
import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "genre/:id/:name", component: PopularMoviesInTheGenreComponent },
  { path: "movies-list", component: ListOfMoviesComponent },
  { path: "profile", component: ProfileComponent },
  { path: 'search/:name', loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsModule) },
  { path: 'search-engine', loadChildren: () => import('./search-engine/search-engine.module').then(m => m.SearchEngineModule) },
  { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = 
[
  PopularMoviesInTheGenreComponent, 
  ListOfMoviesComponent,
  DashboardComponent,
  ProfileComponent,
]
