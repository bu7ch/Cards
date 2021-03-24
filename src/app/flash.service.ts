import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flash } from './components/flash/flash';

@Injectable({
  providedIn: 'root',
})
export class FlashService {
  constructor() {}

  flashs: Flash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
      show: false,
      id: this.getRandomNumber(),
    },
  ];
  flashs$ = new BehaviorSubject<Flash[]>(this.flashs);

  getRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }
  addFlash(flash: { question: string; answer: string }) {
    this.flashs = [
      ...this.flashs,
      {
        ...flash,
        show: false,
        id: this.getRandomNumber(),
      },
    ];
  }
  toggleFlash(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        show: !this.flashs[index].show,
      },
      ...this.flashs.slice(index + 1),
    ];
    this.flashs$.next(this.flashs);
  }
  deleteFlash(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      ...this.flashs.slice(index + 1),
    ];
    this.flashs$.next(this.flashs);
  }

  rememberedChange(id: number, flag: 'correct' | 'incorrect') {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        remembered: flag,
      },
      ...this.flashs.slice(index + 1),
    ];
    this.flashs$.next(this.flashs);
  }
  updateFlash(id, flash: { question: string; answer: string }) {
    const index = this.flashs.findIndex((f) => f.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        ...flash,
      },
        ...this.flashs.slice(index + 1),
    ];
    this.flashs$.next(this.flashs)
  }

  getFlash(id: number){
    const index = this.flashs.findIndex((flash) => flash.id === id)
    return this.flashs[index]
  }
}