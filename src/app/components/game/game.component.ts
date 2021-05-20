import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { ProfileService } from '../../services/profile.service';
import { inGameWords } from '../../models/words';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(
    private wordsService: WordsService,
    private profileService: ProfileService
  ) {}

  wordsLink: string = './assets/mockAPI.json';
  wordsObject: inGameWords[];
  question: string;
  isGameFinished: boolean = false;


  ngOnInit(): void {
    this.wordsService.getWordsData(this.wordsLink).subscribe((data) => {
      this.wordsObject = data.words;
      // Uppercase first letter
      this.question = data.question[0].toUpperCase() + data.question.slice(1);
    });
  }

  countResult(): void {
    // analyzing results for each word
    this.wordsObject = this.wordsObject.map((el) => {
      return {
        ...el,
        result: this.countResultPerWord(el),
      };
    });

    // counting results
    this.profileService.score = this.wordsObject
      .map((el) => el.result)
      .reduce((acc, el) => acc + el, 0);

    this.isGameFinished = true;
  }

  private countResultPerWord(wordObject: inGameWords): number {
    switch (wordObject.checked === wordObject.correct) {
      case false: {
        return -1;
      }
      case true && wordObject.correct == true: {
        return 2;
      }
      default: {
        return 0;
      }
    }
  }

  pickWord(event: any) {
    const pickedWord: inGameWords = <inGameWords>(
      this.wordsObject.find((el) => el.word === event.target.innerText)
    );
    if (pickedWord) {
      const pickedWordIndex = this.wordsObject.indexOf(pickedWord);
      let pickedWordChecked = this.wordsObject[pickedWordIndex].checked;
      this.wordsObject[pickedWordIndex].checked = !pickedWordChecked;
    }
  }

  randomPosition(index: number) {
    const top: number = Math.floor(Math.random() * (index + 3));
    const left: number = Math.floor(Math.random() * (index + 3));
    return `top: ${top}%, left: ${left}%`;
  }
}
