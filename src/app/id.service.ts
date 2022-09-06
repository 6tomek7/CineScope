import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  id: string | undefined
  
  constructor() { }
 
  add(id: string) {
   this.id = id
  }
}
