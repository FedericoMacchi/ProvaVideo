import { Component } from '@angular/core';

import { MatchDays } from '../MatchDayList';

@Component({
  selector: 'app-match-day',
  templateUrl: './match-day.component.html',
  styleUrls: ['./match-day.component.scss']
})

export class MatchDayComponent {

  lista = MatchDays;

  constructor() {
  }

  toggleSingleVisibility(a: any) {
    a.visibility = !a.visibility;
  }
}

