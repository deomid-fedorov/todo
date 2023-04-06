import { Component, Output, EventEmitter } from '@angular/core';
import { PickedDateService } from 'src/app/services/picked-date.service';

@Component({
  selector: 'datepicker-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
})
export class DatepickerInlineComponent {
  @Output() onPickDate = new EventEmitter();
  constructor(private PickedDateService: PickedDateService) {}
  selectedDate: Date = new Date();

  // onDatePick() []
}
