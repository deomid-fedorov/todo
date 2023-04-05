import { Component, Input } from '@angular/core';
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

  constructor(public dialog: MatDialog) {}
  onSave(task: object) {
    // console.log(task);
    let dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        console.log(this.task.title);
      }
    });
  }
}
