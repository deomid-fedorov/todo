import { Component, OnInit } from '@angular/core';
import { GetRequestService } from 'src/app/services/get-request.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'datepicker-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private GetRequestService: GetRequestService,
    private http: HttpClient
  ) {}

  selectedDate: Date = new Date();

  onDatePicked() {
    this.GetRequestService.requestDateTasks(this.selectedDate.toDateString());
  }

  ngOnInit(): void {
    this.GetRequestService.requestDateTasks(this.selectedDate.toDateString());
  }

  sendAddRequest(task: any) {
    this.http
      .post(`http://localhost:3000/tasks/`, {
        title: task.title,
        description: task.description,
        date: task.date,
      })
      .subscribe((response: any) => {
        if (!!response) {
          this.GetRequestService.requestDateTasks(
            this.selectedDate.toDateString()
          );
          console.log('successful put request');
        } else {
          console.log('unsucces put request');
        }
      });
  }

  showAddDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      data: {
        title: '',
        description: '',
        date: this.selectedDate.toDateString(),
      },
    });
    dialogRef.afterClosed().subscribe((task) => {
      if (!!task) {
        this.sendAddRequest(task);
      }
    });
  }
}
