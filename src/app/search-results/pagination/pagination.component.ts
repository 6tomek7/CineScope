import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number | undefined
  pathName: string | undefined 
  firstButton: string | undefined
  secondButton: string | undefined
  thirdButton: string | undefined
  thirdButtonActivated = true
  page: number | undefined
  query: string | undefined
  firstNumber: number | undefined
  secondNumber: number | undefined
  thirdNumber: number | undefined

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
    if(value == 1){
      this.firstButton = "active"
      this.secondButton = ""
      this.firstNumber = value 
      this.secondNumber = ++value
      this.thirdNumber = ++value 
      if(this.totalPages === 2){
        this.thirdNumber = this.secondNumber
        this.thirdButtonActivated = false
      }
    } else if (value == this.totalPages) {
      this.firstButton = ""
      this.secondButton = "active"
      this.thirdNumber = value
      this.secondNumber = value 
      this.firstNumber = --value 
      this.thirdButtonActivated = false
    } else {
      this.firstButton = ""
      this.secondButton = "active"
      this.firstNumber = --value 
      this.secondNumber = ++value
      this.thirdNumber = ++value 
    }
  }
}
