import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  id: number | undefined
  
  constructor() { }
 
  add(id: number) {
   this.id = id
  }
}
