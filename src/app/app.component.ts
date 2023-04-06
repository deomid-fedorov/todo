import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { Task } from '../models';
// import { MatFormField } from '@angular/material/form-field';

/** @title Datepicker input and change events */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tasks: Task[];

  constructor(public dialog: MatDialog, private http: HttpClient) {}
  requestDateTasks(date: string) {
    let tasks: Task[] = [];
    this.http
      .get('http://localhost:3000/tasks' + '?date=' + date)
      .subscribe((response) => {
        for (let task of response as Task[]) {
          tasks.push(task);
        }
      });
    return tasks;
  }

  printDateTasks(date: string) {
    this.tasks = this.requestDateTasks(date);
    console.log(this.tasks);
  }
}
