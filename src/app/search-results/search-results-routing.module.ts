import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCollectionsComponent } from './search-collections/search-collections.component';
import { SearchActorsComponent } from './search-actors/search-actors.component';
import { SearchResultsComponent } from './search-results.component';
import { SearchCompaniesComponent } from './search-companies/search-companies.component';
import { SearchKeywordsComponent } from './search-keywords/search-keywords.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchTvShowsComponent } from './search-tv-shows/search-tv-shows.component';


const routes: Routes = [
  { path: '', component: SearchResultsComponent,
      children: [
        { path: 'people/:name', component: SearchActorsComponent },
        { path: 'collection/:name', component: SearchCollectionsComponent },
        { path: 'companies/:name', component: SearchCompaniesComponent },
        { path: 'keywords/:name', component: SearchKeywordsComponent },
        { path: 'movies/:name', component: SearchMoviesComponent },
        { path: 'tvShows/:name', component: SearchTvShowsComponent }
      ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
