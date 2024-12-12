import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { SearchCompaniesComponent } from './search-companies/search-companies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchActorsComponent } from './search-actors/search-actors.component';
import { SearchCollectionsComponent } from './search-collections/search-collections.component';
import { SearchKeywordsComponent } from './search-keywords/search-keywords.component';
import { SearchEngineModule } from '../search-engine/search-engine.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchTvShowsComponent } from './search-tv-shows/search-tv-shows.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchCompaniesComponent,
    SearchMoviesComponent,
    SearchActorsComponent,
    SearchCollectionsComponent,
    SearchKeywordsComponent,
    SearchTvShowsComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    SearchEngineModule,
    HttpClientModule,
  ]
})
export class SearchResultsModule { }
