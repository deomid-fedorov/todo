import { Component, Input } from '@angular/core';
import { Task } from '../../../models';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  title: string = 'my new title';
  description: string = 'My new description!';
  post: Task = {
    id: '12',
    title: this.title,
    description: this.description,
  };
}
