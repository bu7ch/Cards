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
  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }

  deleteFlash() {
    this.onDelete.emit(this.flash.id);
  }
  editFlash() {
    this.onEdit.emit(this.flash.id);
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
