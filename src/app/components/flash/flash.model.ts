export interface Flash {
  question: string;
  id: number;
  answer: string;
  show: boolean;
  remembered?: 'correct' | 'incorrect';
}
