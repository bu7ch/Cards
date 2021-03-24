import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flash } from './components/flash/flash';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('flashForm', { static: true }) flashForm: NgForm;
  title = 'Cards';
  editing = false;
  editingId: number;
  flash = {
    question: '',
    answer: '',
  };
  flashs;
  constructor(private flashService: FlashService) {
    this.flashs = this.flashService.flashs;
  }

  trackByFlashID(index, flash) {
    return flash.id;
  }
  handleToggleCard(id) {
    this.flashService.toggleFlash(id);
  }
  handleDelete(id) {
    this.flashService.deleteFlash(id);
  }
  handleEdit(id: number) {
    this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }
  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }
  handleRememberedChange({ id, flag }) {
    this.flashService.rememberedChange(id, flag);
  }
  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }
  handleClear() {
    this.flash = {
      question: '',
      answer: '',
    };
    this.flashForm.reset();
  }
}
