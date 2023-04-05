import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/models';

@Component({
  selector: 'tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent {
  tasks: Task[] = [
    {
      title: 'title',
      description: '25 число 2023 year',
      date: 'Tue Apr 04 2023',
      id: 1,
    },
    {
      title: 'title',
      description: '25 число 2023 year',
      date: 'Wed Apr 05 2023',
      id: 2,
    },
    {
      title: 'title',
      description: '25 число 2023 year',
      date: 'Thu Apr 06 2023',
      id: 3,
    },
  ];
  // @Input() tasks: Task[];

  // @Output() onClick = new EventEmitter();

  // clicked(id: string, title: string, description: string) {
  //   let task = {
  //     id: id,
  //     title: title,
  //     description: description,
  //   };
  //   this.onClick.emit(task);
  // }
}
