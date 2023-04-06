import { Component, Output, EventEmitter } from '@angular/core';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
})
export class DatepickerInlineComponent {
  @Output() onPickDate = new EventEmitter();
  selectedDate: Date = new Date();
}
