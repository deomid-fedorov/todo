import { Component, Output, EventEmitter } from '@angular/core';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-component',
  templateUrl: 'datepicker-inline.component.html',
  styleUrls: ['datepicker-inline.component.scss'],
})
export class DatepickerInlineComponent {
  @Output() onPickDate = new EventEmitter();
  selectedDate: Date = new Date();

  // tasks: object[] = [];
  // constructor(public dialog: MatDialog, private http: HttpClient) {}

  // postsCount: number = 0;

  // onPickDate() {
  //   this.sendRequest();
  // }
  // response: any;
  // sendRequest() {
  //   let date = this.selected.toDateString();
  //   this.http
  //     .get('http://localhost:3000/posts' + '?date=' + date)
  //     .subscribe((response) => {
  //       this.response = response;
  //       let posts: Task[] = this.response;
  //       this.tasks = [];
  //       for (let post of posts) {
  //         this.postsCount = posts.length;
  //         this.tasks.push(post);
  //       }
  //       this.datePickEvent.emit(this.tasks);
  //     });
  // }

  // sendPatchRequest(id: string, title: string, description: string) {
  //   this.http
  //     .put('http://localhost:3000/posts' + '/' + id, {
  //       title: title + 'hey',
  //       description: description,
  //       date: 'Sun Apr 09 2023',
  //       id: 7,
  //     })
  //     .subscribe((response) => {
  //       this.response = response;
  //       let posts = this.response;

  //       this.tasks = [];
  //       for (let post of posts) {
  //         console.log(post);
  //         this.postsCount = posts.length;

  //         this.tasks.push(post);
  //       }
  //     });
  // }

  ngOnInit() {
    console.log('init');
  }
}
