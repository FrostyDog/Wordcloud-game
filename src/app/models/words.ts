export interface inGameWords {
  word: string;
  checked: boolean;
  correct: boolean;
  result: number;
}

export interface wordsPackData {
  question: string;
  all_words: string[];
  good_words: string[];
}
