import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movies, MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent implements OnInit {

  movies: Movies | undefined;

 constructor(private cartService: MoviesService) { }
 shippingCosts!: Observable<Movies>;

  ngOnInit(): void {
     this.shippingCosts =  this.cartService.getShippingPrices();
   }


  nowaFunkcja(){
    this.cartService.getShippingPrices()
  }
}