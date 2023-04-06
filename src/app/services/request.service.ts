import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models';

// interface Task {
//   id?: number;
//   title: string;
//   description: string;
//   date: string;
// }

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  requestDateTasks(date: string) {
    let tasks: Task[] = [];
    this.http
      .get('http://localhost:3000/tasks' + '?date=' + date)
      .subscribe((response) => {
        for (let task of response as Task[]) {
          tasks.push(task);
        }
      });
    return tasks;
  }
}
