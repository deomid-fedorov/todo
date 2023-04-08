import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models';

import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

import { CrudRequestsService } from 'src/app/services/crud-requests.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task;

  constructor(
    public dialog: MatDialog,
    private CrudRequestsService: CrudRequestsService
  ) {}

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
        // this.GetRequestService.requestDateTasks(this.task.date);
        this.CrudRequestsService.sendPutRequest(task);
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
        this.CrudRequestsService.sendDeleteRequest(task);
      }
    });
  }
}
