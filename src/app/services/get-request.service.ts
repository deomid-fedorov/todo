import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetRequestService {
  constructor(private http: HttpClient) {}

  tasks$ = new BehaviorSubject([]);

  requestDateTasks(date: string) {
    this.http
      .get('http://localhost:3000/tasks' + '?date=' + date)
      .subscribe((response: any) => {
        this.tasks$.next(response);
      });
  }
}
