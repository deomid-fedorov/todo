import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetRequestService } from 'src/app/services/get-request.service';

@Component({
  selector: 'tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent {
  constructor(private GetRequestService: GetRequestService) {}
  tasks$ = this.GetRequestService.tasks$;
}
