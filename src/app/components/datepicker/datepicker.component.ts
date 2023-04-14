import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { MatNativeDateModule } from '@angular/material/datepicker';
import { CrudRequestsService } from 'src/app/services/crud-requests.service';

@Component({
  selector: 'datepicker-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private CrudRequestsService: CrudRequestsService,
    private http: HttpClient
  ) {}

  selectedDate: any = new Date();

  onDatePicked() {
    this.CrudRequestsService.requestDateTasks(this.selectedDate.toDateString());
  }

  ngOnInit(): void {
    this.CrudRequestsService.requestDateTasks(this.selectedDate.toDateString());
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
        this.CrudRequestsService.sendAddRequest(task);
      }
    });
  }

  dateClasss(date: Date) {
    return 'test';
  }
}
