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
    let tasks = this.requestDateTasks(date);
    console.log(tasks);
  }

  // response: any;
  // sendRequest() {
  //   let date = this.selected.toDateString();
  //   this.http
  //     .get('http://localhost:3000/posts' + '?date=' + date)
  //     .subscribe((response) => {
  //       this.response = response;
  //       let posts: Task[] = this.response;
  //       this.tasks = [];
  //       for (let post of posts) {
  //         this.postsCount = posts.length;
  //         this.tasks.push(post);
  //       }
  //       this.datePickEvent.emit(this.tasks);
  //     });
  // }

  // @Input() tasks: Task[];
  // @Input() task: Task;
  // constructor(public dialog: MatDialog, private http: HttpClient) {}
  // onTaskEdit(task: object) {
  //   console.log(task);
  //   let dialogRef = this.dialog.open(EditDialogComponent);
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (!!result) {
  //       console.log(this.task.title);
  //       console.log(this.task.description);
  //     }
  //   });
  // }
  // ngOnInit() {
  //   console.log('HELLO');
  //   console.log(this.tasks);
  // }
}
