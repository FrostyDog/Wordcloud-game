import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wordsPackData } from '../models/words';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient) {}

  public getWordsData(link: string) {
    return this.http.get<Array<wordsPackData>>(link).pipe(
      map(
        (arrayOfSets) =>
          arrayOfSets[Math.floor(Math.random() * arrayOfSets.length)]
      ),
      map((oneSet) => this.getGameData(oneSet))
    );
  }

  private getGameData(data: wordsPackData) {
    return {
      question: data.question,
      words: this.getWords(data),
    };
  }

  private getWords(data: wordsPackData) {
    return data.all_words.map((el) => {
      return {
        word: el,
        checked: false,
        correct: data.good_words.includes(el),
        result: 0,
      };
    });
  }

  // method for counting with only 1 array
  //   switch (checked === correct) {
  //     case (true && checked == true) : {
  //         result = 2;
  //     }

  //     case (true && checked == false) : {
  //         result = 0;
  //     }

  //     case (false): {
  //         result = -2;
  //     }
  // }
}
