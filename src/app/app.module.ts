import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { DatepickerInlineComponent } from './components/datepicker-inline/datepicker.component';
import { TasksSectionComponent } from './components/tasks-section/tasks-section.component';
import { TaskComponent } from './components/task/task.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
// import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerInlineComponent,
    TasksSectionComponent,
    EditDialogComponent,
    TaskComponent,
    DeleteDialogComponent,
    AddDialogComponent,
  ],
  entryComponents: [EditDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
