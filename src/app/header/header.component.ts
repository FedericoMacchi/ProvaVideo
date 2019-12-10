import { Component } from '@angular/core';

import { MatchDays } from '../MatchDayList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  lista = MatchDays;
  isVisible = true;

  constructor() { }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.lista.length; i++) {
      if (this.isVisible === false) {
        this.lista[i].visibility = true;
      } else {
        this.lista[i].visibility = false;
      }
    }
  }

  toggleSingleVisibility(a: any) {
    a.visibility = !a.visibility;
  }

  clickSelect(event: any) {
    console.log(event.target.value);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].name === event.target.value) {
        this.toggleSingleVisibility(this.lista[i]);
      }
    }
  }
}
