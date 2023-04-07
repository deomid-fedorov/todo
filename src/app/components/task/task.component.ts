import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private RequestService: RequestService
  ) {}

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
          this.RequestService.requestDateTasks(this.task.date);
          console.log('successful put request');
        } else {
          console.log('unsucces put request');
        }
      });
  }
  sendDeleteRequest(task: Task) {
    this.http
      .delete(`http://localhost:3000/tasks/${task.id}`)
      .subscribe((response: any) => {
        if (!!response) {
          this.RequestService.requestDateTasks(this.task.date);
          console.log('successful put request');
        } else {
          console.log('unsucces put request');
        }
      });
  }

  showEditDialog(task: Task) {
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
        this.RequestService.requestDateTasks(this.task.date);
        this.sendPutRequest(task);
      }
    });
  }
  showDeleteDialog(task: Task) {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        id: task.id,
        title: task.title,
        description: task.description,
        date: task.date,
      },
    });
    dialogRef.afterClosed().subscribe((task) => {
      if (!!task) {
        this.sendDeleteRequest(task);
      }
    });
  }
}
