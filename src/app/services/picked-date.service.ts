import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PickedDateService {
  pickedDate: Date = new Date();

  setDate(date: Date) {
    this.pickedDate = date;
    console.log('сохранено,');
    console.log(this.pickedDate);
  }

  getDate() {
    return this.pickedDate;
  }
}
