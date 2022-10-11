import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchCompaniesResult, SearchResultsService } from '../search-results.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.component.html',
  styleUrls: ['./search-companies.component.css']
})
export class SearchCompaniesComponent implements OnInit {
  urlImage = environment.urlImage
  companies: Observable <Array<SearchCompaniesResult>> | undefined

  constructor( private searchResults: SearchResultsService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.companies = this.searchResults.searchCompanies(params['query'], params['page'])
      .pipe(map(results => results.results)) 
    })
  }
}
