import { Injectable } from '@angular/core';
import { ResultsComponent } from '../components/results/results.component';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  name: string = '';
  score: number = 0;

  countScore() {
    let score = 0;
    // check each words object and get a result and add to score:

    this.score = score;
  }
}
