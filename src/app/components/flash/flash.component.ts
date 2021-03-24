import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flash } from './flash';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
})
export class FlashComponent implements OnInit {
  @Input() flash: Flash = {
    id: 1,
    question: 'Rreact or Angular',
    answer: 'No reaction :)',
    show: false,
  };
  @Output() toggleCard = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  onToggleCard() {
    this.toggleCard.emit(this.flash.id);
  }

  deleteFlash() {
    this.delete.emit(this.flash.id);
  }
  editFlash() {
    this.edit.emit(this.flash.id);
  }
  markCorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    });
  }
  markIncorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
