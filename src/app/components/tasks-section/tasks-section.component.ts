import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/models';

@Component({
  selector: 'tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent {
  @Input() tasks: Task[];
}
