import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent {
  constructor(private taskService: RequestService) {}
  tasks$ = this.taskService.tasks$;
}
