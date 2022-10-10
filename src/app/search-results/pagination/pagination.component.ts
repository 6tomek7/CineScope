import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pathName: string | undefined 
  page: number | undefined
  query: string | undefined
  firstNumber = 1
  secondNumber = 2
  thirdNumber = 3

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      this.pathName = location.pathname.substr(7)
      this.page = value['page']
      this.query = value['query']
      this.numberPage(value['page'])
    })
  }

  numberPage(value: number){ 
      this.firstNumber = --value 
      this.secondNumber = ++value
      this.thirdNumber = ++value 
  }
}
