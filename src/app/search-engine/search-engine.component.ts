import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {

  title = 'image-gallery';
  private data:any = []
  constructor(private http: HttpClient) {}

  getData(){
    const url ='https://api.themoviedb.org/3/movie/popular?api_key=38193385b589296926c46f16b67e1b93&language=en-US&page=1'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })}
    

  ngOnInit(): void {
  }

}
