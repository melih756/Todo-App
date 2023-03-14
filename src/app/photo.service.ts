import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  images:string;



  constructor() {
    this.images='assets/breakfast.jpg','assets/sports.jpg','assets/shopping.jpg'
    
   }
}
