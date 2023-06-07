import { Component } from '@angular/core';
import { Customer } from '../test.model';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  list = new Customer(); // customer object creation

  constructor(public vala: HeroService) { // service injecttion
  }

  sub() {
    
    localStorage.setItem('customer', JSON.stringify(this.list))
    this.vala.postmethod(this.list).subscribe(res => {
      // sucess case
      // user created - toastr
    }, err => {
      // error case 
    });
  }

}
