import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './test.model';




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  url="http://localhost:3000/aaaaa";
  url2="http://localhost:3000/creates";
  constructor(private Http:HttpClient){    

    
  } 
  getvalue(){
    return this.Http.get<Customer[]>(this.url)
  }

  postmethod(data:Customer){
    return this.Http.post<Customer>(this.url2,data)
  }


  
  
}
