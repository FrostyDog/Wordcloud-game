import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private wordsService: WordsService) {}
  wordsLink: string = './assets/mockAPI.json';
  words: string[] = [];

  ngOnInit(): void {
    this.wordsService.getWordsData(this.wordsLink).subscribe(data => console.log(data));
  }
}
