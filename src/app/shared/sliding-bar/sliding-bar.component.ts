import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayResult } from 'src/app/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sliding-bar',
  templateUrl: './sliding-bar.component.html',
  styleUrls: ['./sliding-bar.component.css'],
})
export class SlidingBarComponent implements OnInit {
  @Input() link: string | undefined;
  @Input() name: string | undefined;
  @Input() imagePath: string | undefined;
  urlImage = environment.urlImage200;
  constructor() {}

  ngOnInit(): void {}
}
