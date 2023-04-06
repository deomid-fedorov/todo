import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PickedDateService {
  pickedDate: string = new Date().toDateString();

  setDate(date: string) {
    this.pickedDate = date;
  }

  getDate() {}
}
