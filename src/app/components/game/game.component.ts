import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { inGameWords } from '../../models/words';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private wordsService: WordsService) {}
  wordsLink: string = './assets/mockAPI.json';
  wordsObject: inGameWords[];
  question: string;

  ngOnInit(): void {
    this.wordsService.getWordsData(this.wordsLink).subscribe((data) => {
      this.wordsObject = data.words;
      this.question = data.question;
    });
  }

  randomPosition(index: number) {
    const top: number = Math.floor(Math.random() * (index + 3));
    const left: number = Math.floor(Math.random() * (index + 3));
    return `top: ${top}%, left: ${left}%`
  }
}
