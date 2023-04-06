import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task;

  constructor(public dialog: MatDialog, private http: HttpClient) {}
  showDialog(task: Task) {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        id: task.id,
        title: task.title,
        description: task.description,
        date: task.date,
      },
    });
    dialogRef.afterClosed().subscribe((task) => {
      if (!!task) {
        this.sendPutRequest(task);
      }
    });
  }

  sendPutRequest(task: Task) {
    this.http
      .put(`http://localhost:3000/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        date: task.date,
        id: task.id,
      })
      .subscribe((response: any) => {
        if (!!response) {
          console.log('successful put request');
        } else {
          console.log('unsucces put request');
        }
      });
  }
}
