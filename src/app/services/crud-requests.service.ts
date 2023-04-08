import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models';
import { GetRequestService } from './get-request.service';

@Injectable({
  providedIn: 'root',
})
export class CrudRequestsService {
  constructor(
    private http: HttpClient,
    private GetRequestService: GetRequestService
  ) {}

  sendAddRequest(task: Task) {
    this.http
      .post(`http://localhost:3000/tasks/`, {
        title: task.title,
        description: task.description,
        date: task.date,
      })
      .subscribe((response: any) => {
        if (!!response) {
          this.GetRequestService.requestDateTasks(task.date);
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
          this.GetRequestService.requestDateTasks(task.date);
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
          this.GetRequestService.requestDateTasks(task.date);
          console.log('successful put request');
        } else {
          console.log('unsucces put request');
        }
      });
  }
}
