import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

/** @title Datepicker input and change events */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  post: string = 'pst text';
  response: any;
  constructor(private http: HttpClient) {}

  search() {
    this.http.get('http://localhost:3000/posts').subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
