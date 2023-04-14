import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudRequestsService {
  constructor(private http: HttpClient) {}

  requestUrl = 'http://localhost:3000/tasks/';

  tasks$ = new BehaviorSubject<Task[]>([]);

  requestDateTasks(date: string) {
    this.http
      .get('http://localhost:3000/tasks' + '?date=' + date)
      .subscribe((response: any) => {
        this.tasks$.next(response);
      });
  }

  sendAddRequest(task: Task) {
    this.http.post(this.requestUrl, task).subscribe((response: any) => {
      if (!!response) {
        const currentTasksValue = this.tasks$.getValue();
        this.tasks$.next([...currentTasksValue, response]);
      }
    });
  }

  sendPutRequest(task: Task) {
    this.http
      .put(this.requestUrl + task.id, task)
      .subscribe((response: any) => {
        if (!!response) {
          const currentTasksValue = this.tasks$.getValue();
          for (let i = 0; i < currentTasksValue.length; i++) {
            if (currentTasksValue[i].id == task.id) {
              currentTasksValue.splice(i, 1, task);
            }
          }
          this.tasks$.next(currentTasksValue);
        }
      });
  }

  sendDeleteRequest(task: Task) {
    this.http.delete(this.requestUrl + task.id).subscribe((response: any) => {
      if (!!response) {
        const currentTasksValue = this.tasks$.getValue();
        for (let i = 0; i < currentTasksValue.length; i++) {
          if (currentTasksValue[i].id == task.id) {
            currentTasksValue.splice(i, 1);
          }
        }
        this.tasks$.next(currentTasksValue);
      }
    });
  }
}
