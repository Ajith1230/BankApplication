import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank';
  
    status:boolean=false; 


  icons = faBars;


  

  bar(){
    this.status=!this.status;
   
  }
  result(){
    localStorage.clear(); // sessionStorage - save data in browser cache
    alert("Account Successfully Logout");
  }

    
    
  
}
