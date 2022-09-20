import { MoviesService, SearchCompaniesResult } from './../movies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.component.html',
  styleUrls: ['./search-companies.component.css']
})
export class SearchCompaniesComponent implements OnInit {
  @Input()
  resultsActivator: boolean | undefined

  @Output()
  totalResults = new EventEmitter<number>()

  urlImage = environment.urlImage
  companies$: Array<SearchCompaniesResult> | undefined
  companiesTotalPages: number | undefined
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies(){
    this.moviesService.searchCompanies("Tina", 1).subscribe((res) => {
      this.companies$ = res.results.map(array => this.convertToCollections(array))
      this.companiesTotalPages = res.total_pages
      this.totalResults.emit(res.total_results)
      console.log(res)
    })
  }

  convertToCollections(dto: any): SearchCompaniesResult {
    return {
      id: dto.id,
      name: dto.name,
      logo_path: dto.logo_path
    }
  }
}
