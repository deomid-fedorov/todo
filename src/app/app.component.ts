import { Component, Output, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../models';
import { RequestService } from './services/request.service';

/** @title Datepicker input and change events */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tasks: Task[];

  constructor(
    public dialog: MatDialog,
    private RequestService: RequestService
  ) {}

  printDateTasks(date: string) {
    this.tasks = this.RequestService.requestDateTasks(date);
    console.log(this.tasks);
  }
}
