import { Component } from '@angular/core';
import { Flash } from './components/flash/flash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cards';
  editing = false;
  editingId:number;

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

  getRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }

  trackByFlashID(index, flash) {
    return flash.id;
  }
  handleToggleCard(id: number) {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number){
    const flashId = this.flashs.findIndex(flash => flash.id === id); 
    this.flashs.splice(flashId, 1);
  }
  handleEdit(id: number){
    this.editing = true;
    this.editingId = id;
    // editting after adding form
  }
  handleRememberedChange({id, flag}) {
    const flash = this.flashs.find(flash => flash.id === id)
    flash.remembered = flag;
  }

}
