import { Component } from '@angular/core';

import { HeroService } from '../hero.service';
import { Customer } from '../test.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  tests: Customer[];

  constructor(public vala: HeroService) {

  }


  ngOnInit(): void {

    this.vala.getvalue().subscribe((test) => {
      this.tests = test;

    }, err => {

    });


  }


}

