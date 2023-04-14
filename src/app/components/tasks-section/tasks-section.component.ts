import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CrudRequestsService } from 'src/app/services/crud-requests.service';

@Component({
  selector: 'tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent {
  constructor(private CrudRequestsService: CrudRequestsService) {}
  tasks$ = this.CrudRequestsService.tasks$;
}
